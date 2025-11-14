import { HTMLExtUtils } from '@ssml-editor/core';
import type {
  EditorHtmlToElementMethod,
  EditorHtmlToElementMethodProps,
} from '@ssml-editor/vue';
import { BREAK_TYPE } from './constant';
import type { Break } from './model';

export const breakHtmlToElement: EditorHtmlToElementMethod = ({
  element,
  children,
}: EditorHtmlToElementMethodProps): Break => {
  const mark = HTMLExtUtils.getDataAttribute(element, 'mark', '');
  const time = HTMLExtUtils.getDataAttribute(element, 'time', '');
  return {
    type: BREAK_TYPE,
    mark: mark,
    time: time,
    children,
  };
};
