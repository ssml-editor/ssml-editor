import { markClickHandler } from '@/cosy-voice';
import { AudioPlayerSingleton } from '@ssml-editor/modules';
import {
  createParagraph,
  EditorUtils,
  icon,
  markText,
  markWrapper,
  NodeUtils,
  text,
  wrapper,
  type EditorRenderElementMethod,
  type Paragraph,
  type RenderElementProps,
} from '@ssml-editor/vue';
import { Element, Text, type BaseEditor } from 'slate-vue3/core';
import type { VNode } from 'vue';
import type { Speak } from './model';
import styles from './render-element.module.css';

function createParagraphByElement(element: Element): Paragraph {
  const textElement: Text = {
    text: NodeUtils.getText(element),
  };
  return createParagraph([textElement]);
}

function replaceNode(editor: BaseEditor, node: Element) {
  const targetNode = createParagraphByElement(node);
  EditorUtils.replaceNode(editor, node, targetNode);
}

export const speakRenderElement: EditorRenderElementMethod = ({
  element,
  children,
  attributes,
  editor,
}: RenderElementProps): VNode => {
  const node = element as Speak;
  const mark = node.bgmName
    ? `${node.bgmName}-v${node.bgmVolume} | ${node.mark}`
    : node.mark;
  const iconNodes: VNode[] = [
    icon(
      null,
      ['iconfont-ssml-editor', 'icon-ssml-editor-close-fill'],
      undefined,
      {
        onClick: (event: Event) => {
          event.stopPropagation();
          AudioPlayerSingleton.stop().unload();
          replaceNode(editor, node);
        },
      },
    ),
  ];
  if (node.bgm) {
    iconNodes.push(
      icon(
        null,
        ['iconfont-ssml-editor', 'icon-ssml-editor-bofang'],
        undefined,
        {
          onClick: (event: Event) => {
            event.stopPropagation();
            AudioPlayerSingleton.play({ src: node.bgm! });
          },
        },
      ),
    );
    iconNodes.push(
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
    );
  }
  return wrapper(
    'div',
    attributes,
    markWrapper(
      iconNodes,
      markText(mark),
      undefined,
      {
        'background-color': 'var(--cosy-voice-speak)',
      },
      {
        onClick: (event: Event) => {
          event.stopPropagation();
          markClickHandler(editor, node);
        },
      },
    ),
    text(children, [styles.seSpeakText], undefined, undefined, {
      color: 'var(--cosy-voice-speak)',
    }),
  );
};
