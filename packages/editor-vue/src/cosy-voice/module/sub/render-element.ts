import { markClickHandler } from '@/cosy-voice';
import {
  EditorUtils,
  mark,
  text,
  wrapper,
  type EditorRenderElementMethod,
  type RenderElementProps,
} from '@ssml-editor/vue';
import type { VNode } from 'vue';
import type { Sub } from './model';

export const subRenderElement: EditorRenderElementMethod = ({
  element,
  children,
  attributes,
  editor,
}: RenderElementProps): VNode => {
  const node = element as Sub;
  return wrapper(
    attributes,
    mark(
      node.mark,
      undefined,
      { 'background-color': 'var(--cosy-voice-sub)' },
      {
        onClick: (event: Event) => {
          event.stopPropagation();
          markClickHandler(editor, node);
        },
      },
      ['iconfont-ssml-editor', 'icon-ssml-editor-close-fill'],
      {
        onClick: (event: Event) => {
          event.stopPropagation();
          EditorUtils.removeSpace(editor, node);
          EditorUtils.unwrapAllByNode(editor, node);
        },
      },
    ),
    text(children, undefined, undefined, undefined, {
      color: 'var(--cosy-voice-sub)',
    }),
  );
};
