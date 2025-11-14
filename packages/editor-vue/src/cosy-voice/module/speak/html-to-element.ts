import { HTMLExtUtils } from '@ssml-editor/core';
import type {
  EditorHtmlToElementMethod,
  EditorHtmlToElementMethodProps,
} from '@ssml-editor/vue';
import { SPEAK_TYPE } from './constant';
import { Effect } from './effect.enum';
import type { Speak } from './model';

export const speakHtmlToElement: EditorHtmlToElementMethod = ({
  element,
  children,
}: EditorHtmlToElementMethodProps): Speak => {
  const mark = HTMLExtUtils.getDataAttribute(element, 'mark', '');
  const rate = HTMLExtUtils.getDataAttribute(element, 'rate', 1);
  const pitch = HTMLExtUtils.getDataAttribute(element, 'pitch', 1);
  const volume = HTMLExtUtils.getDataAttribute(element, 'volume', 100);
  const effect = HTMLExtUtils.getDataAttribute(element, 'effect')
    ? Effect.fromString(HTMLExtUtils.getDataAttribute(element, 'effect')!!)
    : undefined;
  const effectValue = HTMLExtUtils.getDataAttribute(element, 'effect-value');
  const bgm = HTMLExtUtils.getDataAttribute(element, 'bgm');
  const bgmName = HTMLExtUtils.getDataAttribute(element, 'bgmName');
  const bgmVolume = HTMLExtUtils.getDataAttribute(element, 'bgm-volume')
    ? +HTMLExtUtils.getDataAttribute(element, 'bgm-volume')!!
    : undefined;
  return {
    type: SPEAK_TYPE,
    mark: mark,
    rate: rate,
    pitch: pitch,
    volume: volume,
    effect: effect,
    effectValue: effectValue,
    bgm: bgm,
    bgmName: bgmName,
    bgmVolume: bgmVolume,
    children: children,
  };
};
