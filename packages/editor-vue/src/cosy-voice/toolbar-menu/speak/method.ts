import { Effect } from '@/cosy-voice';
import type { LabelValue } from '@ssml-editor/core';

export function generateSpeakUsageRecordLabel(
  dataListRate: LabelValue[],
  dataListPitch: LabelValue[],
  rate: number,
  pitch: number,
  volume: number,
  effect?: Effect,
  effectValue?: string,
): string {
  let rateName = '';
  for (const r of dataListRate) {
    if (r.value === rate) {
      rateName = r.label;
      break;
    }
  }
  let pitchName = '';
  for (const p of dataListPitch) {
    if (p.value === pitch) {
      pitchName = p.label;
      break;
    }
  }
  const parts: string[] = [];
  parts.push(rateName);
  parts.push(pitchName);
  parts.push(`v${volume}`);
  if (effect) {
    parts.push(effect.toString());
    if (
      (effect === Effect.EQ ||
        effect === Effect.LPFILTER ||
        effect === Effect.HPFILTER) &&
      effectValue
    ) {
      parts.push(effectValue);
    }
  }
  return parts.join('-');
}
