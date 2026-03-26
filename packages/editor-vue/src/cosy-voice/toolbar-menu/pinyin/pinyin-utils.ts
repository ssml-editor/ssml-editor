import type { CommonOptions } from 'node_modules/pinyin-pro/types/common/type';
import { pinyin, polyphonic } from 'pinyin-pro';

export const PinyinUtils = {
  /**
   * 判断拼音的音调是否是指定数字结尾
   * @param pinyin 带数字音调的拼音
   * @returns 是或否
   */
  toneIsEndsWith(pinyin: string, end: string): boolean {
    return pinyin[pinyin.length - 1] === end;
  },

  /**
   * 将数字音调0转为5
   * @param pinyin 带数字音调的拼音
   * @returns 转换后的拼音
   */
  convertTone0To5(pinyin: string): string {
    return this.toneIsEndsWith(pinyin, '0')
      ? `${pinyin.slice(0, pinyin.length - 1)}5`
      : pinyin;
  },

  /**
   * 通过文字获取多音字的拼音
   * @param word 单个文字
   * @returns 拼音数组
   */
  getPolyphone(word: string, toneType?: CommonOptions['toneType']): string[] {
    if (word.length === 1) {
      const pinyinList = polyphonic(word, {
        type: 'array',
        toneType: toneType,
      })[0];
      if (toneType === 'num') {
        return pinyinList.map((pinyin) => {
          return this.convertTone0To5(pinyin);
        });
      } else {
        return pinyinList;
      }
    } else {
      throw new Error('word必须是一个中文文字');
    }
  },

  /**
   * 通过文字获取拼音
   * @param text 中文文本
   * @returns 拼音数组
   */
  getPinyin(text: string, toneType?: CommonOptions['toneType']): string[] {
    const pinyinList = pinyin(text, { type: 'array', toneType: toneType });
    if (toneType === 'num') {
      return pinyinList.map((pinyin) => {
        return this.convertTone0To5(pinyin);
      });
    } else {
      return pinyinList;
    }
  },
};
