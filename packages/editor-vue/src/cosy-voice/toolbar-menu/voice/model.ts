export interface ResponseVoice {
  id: string;
  name: string;
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
  category?: string;
  voiceId?: string;
  voiceSrc?: string;
}
