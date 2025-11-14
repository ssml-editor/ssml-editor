import type {
  Bgm,
  FetchBgmParams,
  FetchSoundParams,
  FetchVoiceParams,
  LabelValue,
  ResponseVoice,
  SearchBgmParams,
  SearchSoundParams,
  SearchVoiceParams,
  Sound,
} from '@ssml-editor/editor-vue';
import axios from 'axios';
import '../mock';

export const Api = {
  async fetchVoiceCategories(page: number): Promise<LabelValue[]> {
    const resp = await axios.get('/voice/category', { params: { page } });
    return resp.data;
  },
  async fetchVoices(params: FetchVoiceParams): Promise<ResponseVoice[]> {
    const resp = await axios.get('/voices', { params });
    return resp.data;
  },
  async searchVoices(params: SearchVoiceParams): Promise<ResponseVoice[]> {
    const resp = await axios.get('/voices', { params });
    return resp.data;
  },
  async fetchSoundCategories(page: number): Promise<LabelValue[]> {
    const resp = await axios.get('/sound/category', { params: { page } });
    return resp.data;
  },
  async fetchSounds(params: FetchSoundParams): Promise<Sound[]> {
    const resp = await axios.get('/sounds', { params });
    return resp.data;
  },
  async searchSounds(params: SearchSoundParams): Promise<Sound[]> {
    const resp = await axios.get('/sounds', { params });
    return resp.data;
  },
  async fetchBgmCategories(page: number): Promise<LabelValue[]> {
    const resp = await axios.get('/bgm/category', { params: { page } });
    return resp.data;
  },
  async fetchBgms(params: FetchBgmParams): Promise<Bgm[]> {
    const resp = await axios.get('/bgms', { params });
    return resp.data;
  },
  async searchBgms(params: SearchBgmParams): Promise<Bgm[]> {
    const resp = await axios.get('/bgms', { params });
    return resp.data;
  },
};
