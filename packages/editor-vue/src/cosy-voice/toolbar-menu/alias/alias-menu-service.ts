import {
  Alphabet,
  PHONEME_TYPE,
  SAY_AS_TYPE,
  SPEAK_TYPE,
  SUB_TYPE,
  type Phoneme,
  type Sub,
} from '@/cosy-voice';
import { Warning } from '@ssml-editor/base';
import { EditorUtils, MenuBaseService } from '@ssml-editor/vue';
import { Range, type Descendant } from 'slate-vue3/core';

export class AliasMenuService extends MenuBaseService {
  override isDisabled(): boolean {
    if (super.isDisabled()) return true;
    const { selection } = this.editor;
    if (!selection) return true;
    if (Range.isCollapsed(selection)) {
      throw new Warning('请框选要添加别名的文本');
    }
    const speakNode = EditorUtils.findSelectedNodeByType(
      this.editor,
      SPEAK_TYPE,
    );
    if (!speakNode) {
      throw new Warning('请先为段落添加属性');
    }
    const sayAsNode = EditorUtils.findSelectedNodeByType(
      this.editor,
      SAY_AS_TYPE,
    );
    if (sayAsNode) {
      throw new Warning('已添加读法的文本无法添加别名');
    }
    const phonemeNode = EditorUtils.findSelectedNodeByType(
      this.editor,
      PHONEME_TYPE,
    );
    if (phonemeNode) {
      const alphabet = (phonemeNode as Phoneme).alphabet;
      if (alphabet === Alphabet.PY) {
        throw new Warning('已添加拼音的文本无法添加别名');
      } else {
        throw new Warning('已添加音标的文本无法添加别名');
      }
    }
    return false;
  }

  getSerializedNode(): Sub | undefined {
    const node = EditorUtils.findSelectedNodeByType(this.editor, SUB_TYPE);
    if (node) {
      return node as Sub;
    }
  }

  setNode(alias: string): Descendant | null {
    if (!this.isDisabled()) {
      const value = this.getText();
      if (value) {
        const element: Sub = {
          type: SUB_TYPE,
          mark: alias,
          alias: alias,
          children: [{ text: value }],
        };
        const node = EditorUtils.findSelectedNodeByType(this.editor, SUB_TYPE);
        if (node) {
          const partialElement = element as Partial<Sub>;
          delete partialElement.children;
          delete partialElement.type;
          EditorUtils.replaceNode(this.editor, node, partialElement);
          return node;
        } else {
          this.editor.insertNode(element);
          return EditorUtils.findSelectedNodeByType(this.editor, SUB_TYPE);
        }
      }
    }
    return null;
  }
}
