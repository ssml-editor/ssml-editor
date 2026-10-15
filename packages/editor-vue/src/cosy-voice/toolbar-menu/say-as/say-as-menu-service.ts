import {
  Alphabet,
  type Phoneme,
  PHONEME_TYPE,
  SAY_AS_TYPE,
  type SayAs,
  SayAsInterpretation,
  SPEAK_TYPE,
  SUB_TYPE,
} from '@/cosy-voice';
import { Warning } from '@ssml-editor/base';
import { EditorUtils, MenuBaseService } from '@ssml-editor/vue';
import { Range } from 'slate-vue3/core';
import { ValidatorUtils } from './validator-utils';

export class SayAsMenuService extends MenuBaseService {
  override isDisabled(): boolean {
    if (super.isDisabled()) return true;
    const { selection } = this.editor;
    if (!selection) return true;
    if (Range.isCollapsed(selection)) {
      throw new Warning('请框选要添加读法的文本');
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
      throw new Warning('已添加别名的文本无法添加读法');
    }
    const phonemeNode = EditorUtils.findSelectedNodeByType(
      this.editor,
      PHONEME_TYPE,
    );
    if (phonemeNode) {
      const alphabet = (phonemeNode as Phoneme).alphabet;
      if (alphabet === Alphabet.PY) {
        throw new Warning('已添加拼音的文本无法添加读法');
      } else {
        throw new Warning('已添加音标的文本无法添加读法');
      }
    }
    return false;
  }

  getDefaultValidateMethod(
    key: SayAsInterpretation,
  ): (text: string) => boolean {
    switch (key) {
      case SayAsInterpretation.CARDINAL:
        return ValidatorUtils.isCardinal.bind(ValidatorUtils);
      case SayAsInterpretation.DIGITS:
        return ValidatorUtils.isDigits.bind(ValidatorUtils);
      case SayAsInterpretation.TELEPHONE:
        return ValidatorUtils.isTelephone.bind(ValidatorUtils);
      case SayAsInterpretation.NAME:
        return ValidatorUtils.isName.bind(ValidatorUtils);
      case SayAsInterpretation.ADDRESS:
        return ValidatorUtils.isAddress.bind(ValidatorUtils);
      case SayAsInterpretation.ID:
        return ValidatorUtils.isId.bind(ValidatorUtils);
      case SayAsInterpretation.CHARACTERS:
        return ValidatorUtils.isCharacters.bind(ValidatorUtils);
      case SayAsInterpretation.PUNCTUATION:
        return ValidatorUtils.isPunctuation.bind(ValidatorUtils);
      case SayAsInterpretation.DATE:
        return ValidatorUtils.isDate.bind(ValidatorUtils);
      case SayAsInterpretation.TIME:
        return ValidatorUtils.isTime.bind(ValidatorUtils);
      case SayAsInterpretation.CURRENCY:
        return ValidatorUtils.isCurrency.bind(ValidatorUtils);
      case SayAsInterpretation.MEASURE:
        return ValidatorUtils.isMeasure.bind(ValidatorUtils);
      default:
        return () => false;
    }
  }

  setNode(interpret: SayAsInterpretation, mark: string) {
    if (!this.isDisabled()) {
      const value = this.getText();
      if (value) {
        const element: SayAs = {
          type: SAY_AS_TYPE,
          interpretAs: interpret,
          mark: mark,
          children: [{ text: value }],
        };
        const node = EditorUtils.findSelectedNodeByType(
          this.editor,
          SAY_AS_TYPE,
        );
        if (node) {
          const partialElement = element as Partial<SayAs>;
          delete partialElement.children;
          delete partialElement.type;
          EditorUtils.replaceNode(this.editor, node, partialElement);
        } else {
          this.editor.insertNode(element);
        }
      }
    }
  }
}
