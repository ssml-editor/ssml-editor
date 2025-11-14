import { HTMLExtUtils } from '@ssml-editor/core';
import type {
  EditorHtmlToElementMethod,
  EditorHtmlToElementMethodProps,
} from '@ssml-editor/vue';
import { SAY_AS_TYPE } from './constant';
import type { SayAs } from './model';
import { SayAsInterpretation } from './say-as-interpretation.enum';

export const sayAsHtmlToElement: EditorHtmlToElementMethod = ({
  element,
  children,
}: EditorHtmlToElementMethodProps): SayAs => {
  const mark = HTMLExtUtils.getDataAttribute(element, 'mark', '');
  const interpretAs =
    SayAsInterpretation.fromString(
      HTMLExtUtils.getDataAttribute(element, 'interpret-as', 'id'),
    ) || SayAsInterpretation.ID;
  return {
    type: SAY_AS_TYPE,
    mark: mark,
    interpretAs: interpretAs,
    children: children,
  };
};
