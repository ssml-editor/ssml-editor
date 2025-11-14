import { HTMLExtUtils } from '@ssml-editor/core';
import type {
  EditorHtmlToElementMethod,
  EditorHtmlToElementMethodProps,
} from '@ssml-editor/vue';
import { SOUND_EVENT_TYPE } from './constant';
import type { SoundEvent } from './model';

export const soundEventHtmlToElement: EditorHtmlToElementMethod = ({
  element,
  children,
}: EditorHtmlToElementMethodProps): SoundEvent => {
  const mark = HTMLExtUtils.getDataAttribute(element, 'mark', '');
  const src = HTMLExtUtils.getDataAttribute(element, 'src', '');
  return {
    type: SOUND_EVENT_TYPE,
    mark: mark,
    src: src,
    children,
  };
};
