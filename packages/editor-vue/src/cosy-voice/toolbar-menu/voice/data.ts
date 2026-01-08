import type { VoiceContentDataModel } from './model';

export class VoiceContentData implements VoiceContentDataModel {
  constructor(
    categoryName?: string,
    categoryValue?: string,
    voiceName?: string,
    voiceValue?: string,
    voiceSrc?: string,
  ) {
    this.categoryName = categoryName;
    this.categoryValue = categoryValue;
    this.voiceName = voiceName;
    this.voiceValue = voiceValue;
    this.voiceSrc = voiceSrc;
  }

  categoryName?: string;
  categoryValue?: string;
  voiceName?: string;
  voiceValue?: string;
  voiceSrc?: string;
}
