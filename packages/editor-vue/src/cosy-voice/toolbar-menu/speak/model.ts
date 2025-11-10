import type { Effect } from '@/cosy-voice';

export interface Bgm {
  name: string;
  src: string;
}

export interface FetchBgmParams {
  page: number;
  category?: string;
}

export interface SearchBgmParams {
  word?: string;
}

export interface SpeakContentDataModal {
  rate: number;
  pitch: number;
  volume: number;
  bgmVolume: number;
  effect?: Effect;
  effectValue?: string;
  bgm?: string;
  bgmName?: string;
  label?: string;
}

export interface BgmContentDataModel {
  category?: string;
  music?: string;
}

export interface BgmUsageDataModel extends BgmContentDataModel {
  musicName?: string;
}
