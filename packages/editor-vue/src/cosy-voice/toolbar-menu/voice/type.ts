import type { FetchLabelValueFunction } from '@/index.type';
import type {
  FetchVoiceParams,
  ResponseVoice,
  SearchVoiceParams,
  VoiceContentDataModel,
} from './model';
import type { VoiceStorageType } from './voice-storage-type.enum';

export type FetchVoiceFunction = (
  params: FetchVoiceParams,
) => Promise<ResponseVoice[]>;

export type SearchVoiceFunction = (
  params: SearchVoiceParams,
) => Promise<ResponseVoice[]>;

export type VoiceProps = {
  storageType?: VoiceStorageType;
  storeName?: string;
  reader?: () => Promise<VoiceContentDataModel | undefined>;
  saver?: (data: VoiceContentDataModel) => Promise<boolean>;
  categoryPageSize?: number;
  voicePageSize?: number;
  fetchVoices?: FetchVoiceFunction;
  fetchCategories?: FetchLabelValueFunction;
  searchVoices?: SearchVoiceFunction;
};
