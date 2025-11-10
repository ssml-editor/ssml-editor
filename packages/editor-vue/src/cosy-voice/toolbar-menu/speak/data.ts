import type { Effect } from '@/cosy-voice';
import type { BgmContentDataModel, SpeakContentDataModal } from './model';

export class SpeakContentData implements SpeakContentDataModal {
  constructor(
    rate: number = 1.0,
    pitch: number = 1.0,
    volume: number = 100,
    bgmVolume: number = 30,
    effect?: Effect,
    effectValue?: string,
    bgm?: string,
    bgmName?: string,
    label?: string,
  ) {
    this.rate = rate;
    this.pitch = pitch;
    this.volume = volume;
    this.bgmVolume = bgmVolume;
    this.effect = effect;
    this.effectValue = effectValue;
    this.bgm = bgm;
    this.bgmName = bgmName;
    this.label = label;
  }

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

export class BgmContentData implements BgmContentDataModel {
  constructor(category?: string, music?: string) {
    this.category = category;
    this.music = music;
  }

  category?: string;
  music?: string;
}
