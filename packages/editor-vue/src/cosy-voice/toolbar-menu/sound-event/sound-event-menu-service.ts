import {
  type Phoneme,
  type SoundEvent,
  Alphabet,
  PHONEME_TYPE,
  SAY_AS_TYPE,
  SOUND_EVENT_TYPE,
  SPEAK_TYPE,
  SUB_TYPE,
} from '@/cosy-voice';
import { Warning } from '@ssml-editor/base';
import { EditorUtils, MenuBaseService } from '@ssml-editor/vue';
import { Range } from 'slate-vue3/core';

export class SoundEventMenuService extends MenuBaseService {
  override isDisabled(): boolean {
    if (super.isDisabled()) return true;
    const { selection } = this.editor;
    if (!selection) return true;
    if (Range.isExpanded(selection)) {
      throw new Warning('请不要框选文本');
    }
    const speakNode = EditorUtils.findSelectedNodeByType(
      this.editor,
      SPEAK_TYPE,
    );
    if (!speakNode) {
      throw new Warning('请先为段落添加属性');
    }
    const subNode = EditorUtils.findSelectedNodeByType(this.editor, SUB_TYPE);
    if (subNode) {
      throw new Warning('无法插入到已添加别名的文本中');
    }
    const sayAsNode = EditorUtils.findSelectedNodeByType(
      this.editor,
      SAY_AS_TYPE,
    );
    if (sayAsNode) {
      throw new Warning('无法插入到已添加读法的文本中');
    }
    const phonemeNode = EditorUtils.findSelectedNodeByType(
      this.editor,
      PHONEME_TYPE,
    );
    if (phonemeNode) {
      const alphabet = (phonemeNode as Phoneme).alphabet;
      if (alphabet === Alphabet.PY) {
        throw new Warning('无法插入到已添加拼音的文本中');
      } else {
        throw new Warning('无法插入到已添加音标的文本中');
      }
    }
    return false;
  }

  setNode(src: string, mark: string = 'Sound') {
    if (!this.isDisabled()) {
      const node: SoundEvent = {
        type: SOUND_EVENT_TYPE,
        src: src,
        mark,
        children: [{ text: '' }],
      };
      this.editor.insertNode(node);
    }
  }
}
