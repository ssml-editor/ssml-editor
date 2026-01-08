export interface ResponseVoice {
  name: string;
  value: string;
  src: string;
}

export interface FetchVoiceParams {
  page: number;
  category?: string;
}

export interface SearchVoiceParams {
  word?: string;
}

export interface VoiceContentDataModel {
  categoryName?: string;
  categoryValue?: string;
  voiceName?: string;
  voiceValue?: string;
  voiceSrc?: string;
}
