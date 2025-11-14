import type {
  FetchBgmParams,
  FetchSoundParams,
  FetchVoiceParams,
  LabelValue,
  SearchBgmParams,
  SearchSoundParams,
  SearchVoiceParams,
} from '@ssml-editor/editor-vue';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import bgms from './bgms';
import sounds from './sounds';
import voiceCategories from './voice-categories';
import voices from './voices';

const mock = new MockAdapter(axios);

mock.onGet('/voice/category').reply(() => {
  const data: LabelValue[] = voiceCategories;
  return [200, data];
});

mock.onGet('/voices').reply((config) => {
  const params = config.params as FetchVoiceParams & SearchVoiceParams;
  let data = voices;
  if (typeof params.word === 'string') {
    data = data.filter((v) => v.name.includes(params.word as string));
    return [200, data];
  } else {
    if (params.category === 'public') {
      if (params.page === 1) {
        return [200, data.slice(0, 10)];
      } else if (params.page === 2) {
        return [200, data.slice(10, 20)];
      } else {
        return [200, []];
      }
    } else if (params.category === 'my') {
      return [200, []];
    }
    return [200, []];
  }
});

mock.onGet('/sound/category').reply(() => {
  const data: LabelValue[] = voiceCategories;
  return [200, data];
});

mock.onGet('/sounds').reply((config) => {
  const params = config.params as FetchSoundParams & SearchSoundParams;
  let data = sounds;
  if (typeof params.word === 'string') {
    data = data.filter((v) => v.name.includes(params.word as string));
    return [200, data];
  } else {
    if (params.category === 'public') {
      if (params.page === 1) {
        return [200, data.slice(0, 10)];
      } else {
        return [200, []];
      }
    } else if (params.category === 'my') {
      return [200, []];
    }
    return [200, []];
  }
});

mock.onGet('/bgm/category').reply(() => {
  const data: LabelValue[] = voiceCategories;
  return [200, data];
});

mock.onGet('/bgms').reply((config) => {
  const params = config.params as FetchBgmParams & SearchBgmParams;
  let data = bgms;
  if (typeof params.word === 'string') {
    data = data.filter((v) => v.name.includes(params.word as string));
    return [200, data];
  } else {
    if (params.category === 'public') {
      if (params.page === 1) {
        return [200, data.slice(0, 10)];
      } else {
        return [200, []];
      }
    } else if (params.category === 'my') {
      return [200, []];
    }
    return [200, []];
  }
});
