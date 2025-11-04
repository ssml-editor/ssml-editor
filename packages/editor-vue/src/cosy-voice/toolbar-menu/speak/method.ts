import { Effect } from '@/cosy-voice';
import type { LabelValue } from '@ssml-editor/core';

export function generateSpeakUsageRecordLabel(
  dataListRate: LabelValue[],
  dataListPitch: LabelValue[],
  dataListBgm: LabelValue[],
  rate: number,
  pitch: number,
  volume: number,
  bgmVolume: number,
  effect?: Effect,
  effectValue?: string,
  bgm?: string,
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
  parts.push(volume.toString());
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
  if (bgm) {
    for (const b of dataListBgm) {
      if (b.value === bgm) {
        parts.push(b.label);
        break;
      }
    }
  }
  parts.push(bgmVolume.toString());
  return parts.join('-');
}
