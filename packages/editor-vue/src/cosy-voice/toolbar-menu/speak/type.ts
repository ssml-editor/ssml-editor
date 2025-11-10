import type {
  Bgm,
  FetchBgmParams,
  FetchLabelValueFunction,
  SearchBgmParams,
} from '@/index';
import type { LabelValue } from '@ssml-editor/core';

export type FetchBgmFunction = (params: FetchBgmParams) => Promise<Bgm[]>;

export type SearchBgmFunction = (params: SearchBgmParams) => Promise<Bgm[]>;

export type SpeakProps = {
  rates?: LabelValue[];
  pitches?: LabelValue[];
  effects?: LabelValue[];
  storedRecordCount?: number;
};

export type BgmProps = {
  bgmPageSize?: number;
  bgmCategoryPageSize?: number;
  fetchBgms?: FetchBgmFunction;
  fetchCategories?: FetchLabelValueFunction;
  searchBgms?: SearchBgmFunction;
};
