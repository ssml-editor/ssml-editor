export interface Sound {
  name: string;
  src: string;
}

export interface FetchSoundParams {
  page: number,
  category?: string;
}

export interface SearchSoundParams {
  word?: string;
}

export interface SoundContentDataModel {
  category?: string;
  sound?: string;
}

export interface SoundUsageDataModel extends SoundContentDataModel {
  mark?: string;
}
