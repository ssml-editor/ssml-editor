import type { EditorSerializationMethod } from '@ssml-editor/vue';
import { Effect } from './effect.enum';
import type { Speak } from './model';

export const speakSerializer = ((node: Speak, children?: string): string => {
  const parts: string[] = [];
  parts.push(
    `<speak rate="${node.rate}" pitch="${node.pitch}" volume="${node.volume}"`,
  );
  if (node.effect) {
    parts.push(` effect="${node.effect}"`);
    if (
      (node.effect === Effect.EQ ||
        node.effect === Effect.LPFILTER ||
        node.effect === Effect.HPFILTER) &&
      node.effectValue
    ) {
      parts.push(` effectValue="${node.effectValue}"`);
    }
  }
  if (node.bgm) {
    parts.push(` bgm="${node.bgm}"`);
  }
  if (node.bgmVolume) {
    parts.push(` backgroundMusicVolume="${node.bgmVolume}"`);
  }
  parts.push(`>${children}</speak>`);
  return parts.join('');
}) as EditorSerializationMethod;
