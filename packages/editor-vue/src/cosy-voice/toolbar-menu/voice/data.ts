import type { VoiceContentDataModel } from './model';

export class VoiceContentData implements VoiceContentDataModel {
  constructor(category?: string, voiceId?: string, voiceSrc?: string) {
    this.category = category;
    this.voiceId = voiceId;
    this.voiceSrc = voiceSrc;
  }

  category?: string;
  voiceId?: string;
  voiceSrc?: string;
}
