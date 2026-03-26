import {
  Alphabet,
  type Phoneme,
  PHONEME_TYPE,
  SPEAK_TYPE,
  SUB_TYPE,
} from '@/cosy-voice';
import { Warning } from '@ssml-editor/base';
import { EditorUtils, MenuBaseService } from '@ssml-editor/vue';
import { Range } from 'slate-vue3/core';

export class PinyinMenuService extends MenuBaseService {
  override isDisabled(): boolean {
    if (super.isDisabled()) return true;
    const { selection } = this.editor;
    if (!selection) return true;
    if (Range.isCollapsed(selection)) {
      throw new Warning('请框选中文单词');
    }
    const value = this.getText();
    if (!/^[\u4E00-\u9FA5]+$/gi.test(value)) {
      throw new Warning('请框选中文单词');
    }
    const speakNode = EditorUtils.findSelectedNodeByType(
      this.editor,
      SPEAK_TYPE,
    );
    if (!speakNode) {
      throw new Warning('仅支持为有属性的段落中的中文添加拼音');
    }
    const subNode = EditorUtils.findSelectedNodeByType(this.editor, SUB_TYPE);
    if (subNode) {
      throw new Warning('已添加别名的文本无法添加拼音');
    }
    return false;
  }

  setNode(ph: string, mark: string) {
    if (!this.isDisabled()) {
      const value = this.getText();
      if (value) {
        const element: Phoneme = {
          type: PHONEME_TYPE,
          alphabet: Alphabet.PY,
          ph: ph,
          mark: mark,
          children: [{ text: value }],
        };
        const node = EditorUtils.findSelectedNodeByType(
          this.editor,
          PHONEME_TYPE,
        );
        if (node) {
          EditorUtils.removeSpace(this.editor, node);
          EditorUtils.unwrapAllByNode(this.editor, node);
        }
        this.editor.insertNode(element);
      }
    }
  }
}
