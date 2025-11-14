import { HTMLExtUtils } from '@ssml-editor/core';
import type {
  EditorHtmlToElementMethod,
  EditorHtmlToElementMethodProps,
} from '@ssml-editor/vue';
import { VOICE_TYPE } from './constant';
import type { Voice } from './model';

export const voiceHtmlToElement: EditorHtmlToElementMethod = ({
  element,
  children,
}: EditorHtmlToElementMethodProps): Voice => {
  const mark = HTMLExtUtils.getDataAttribute(element, 'mark', '');
  const name = HTMLExtUtils.getDataAttribute(element, 'name', '');
  const effect = HTMLExtUtils.getDataAttribute(element, 'effect', '');
  return {
    type: VOICE_TYPE,
    mark: mark,
    name: name,
    effect: effect,
    children: children,
  };
};
