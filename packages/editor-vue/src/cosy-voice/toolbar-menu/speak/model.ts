import type { Effect } from '@/cosy-voice';

export interface SpeakContentDataModal {
  rate: number;
  pitch: number;
  volume: number;
  bgmVolume: number;
  effect?: Effect;
  effectValue?: string;
  bgm?: string;
  label?: string;
}
