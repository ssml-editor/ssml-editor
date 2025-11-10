import { AudioPlayerSingleton } from '@ssml-editor/modules';
import {
  type EditorRenderElementMethod,
  type RenderElementProps,
  EditorUtils,
  icon,
  markText,
  markWrapper,
  wrapper,
} from '@ssml-editor/vue';
import type { VNode } from 'vue';
import type { SoundEvent } from './model';

export const soundEventRenderElement: EditorRenderElementMethod = ({
  element,
  children,
  attributes,
  editor,
}: RenderElementProps): VNode => {
  const node = element as SoundEvent;
  return wrapper(
    attributes,
    markWrapper(
      [
        icon(
          null,
          ['iconfont-ssml-editor', 'icon-ssml-editor-close-fill'],
          undefined,
          {
            onClick: (event: Event) => {
              event.stopPropagation();
              AudioPlayerSingleton.stop().unload();
              EditorUtils.removeByNode(editor, node);
            },
          },
        ),
        icon(
          null,
          ['iconfont-ssml-editor', 'icon-ssml-editor-bofang'],
          undefined,
          {
            onClick: (event: Event) => {
              event.stopPropagation();
              AudioPlayerSingleton.play({ src: node.src });
            },
          },
        ),
        icon(
          null,
          ['iconfont-ssml-editor', 'icon-ssml-editor-zanting'],
          undefined,
          {
            onClick: (event: Event) => {
              event.stopPropagation();
              AudioPlayerSingleton.pause();
            },
          },
        ),
      ],
      markText(node.mark),
      undefined,
      { 'background-color': 'var(--cosy-voice-sound-event)' },
    ),
    icon(children, ['iconfont-ssml-editor', 'icon-ssml-editor-shengyin'], {
      color: 'var(--cosy-voice-sound-event)',
    }),
  );
};
