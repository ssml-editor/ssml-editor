import {
  AliasMenu,
  BreakMenu,
  BreakModule,
  CodeMenu,
  CopyMenu,
  EnglishMenu,
  ExportMenu,
  fullScreenMenu,
  newLinePlugin,
  pastePlugin,
  PhonemeModule,
  PinyinMenu,
  RedoMenu,
  RowContainerAlign,
  SaveMenu,
  SayAsMenu,
  SayAsModule,
  SoundEventModule,
  SoundMenu,
  speakEffectData,
  SpeakMenu,
  SpeakModule,
  SpeakNormalizer,
  speakPitcheData,
  speakRateData,
  StorageType,
  SubmitMenu,
  SubModule,
  ToolbarDivider,
  UndoMenu,
  VoiceMenu,
  voidElementPlugin,
  type BaseEditor,
  type BgmProps,
  type EditorConfig,
  type SayAsProps,
  type SoundEventProps,
  type SpeakProps,
  type SubmitProps,
  type ToolbarDividerProps,
  type ValidateMethod,
  type VoiceProps,
} from '@ssml-editor/editor-vue';
import { Api } from './api';

const sayAsValidateMethod: ValidateMethod = (text, defaultValidateMethod) =>
  defaultValidateMethod(text);

export default <EditorConfig>{
  databaseName: 'example',
  scroll: true,
  placeholder: '请输入内容...',
  maxLength: 200,
  animation: { grayscale: true, zoom: true },
  html: {
    storageType: StorageType.LOCAL,
    storeName: 'example-html',
  },
  toolbar: {
    menus: [
      {
        component: VoiceMenu,
        props: <VoiceProps>{
          fetchVoices: Api.fetchVoices,
          fetchCategories: Api.fetchVoiceCategories,
          searchVoices: Api.searchVoices,
        },
      },
      {
        component: SpeakMenu,
        props: <SpeakProps & BgmProps>{
          rates: speakRateData,
          pitches: speakPitcheData,
          effects: speakEffectData,
          fetchBgms: Api.fetchBgms,
          fetchCategories: Api.fetchBgmCategories,
          searchBgms: Api.searchBgms,
        },
      },
      {
        component: ToolbarDivider,
        props: <ToolbarDividerProps>{
          backgroundColor: 'var(--color-green-600)',
        },
      },
      {
        component: BreakMenu,
      },
      {
        component: SoundMenu,
        props: <SoundEventProps>{
          fetchSounds: Api.fetchSounds,
          fetchCategories: Api.fetchSoundCategories,
          searchSounds: Api.searchSounds,
        },
      },
      {
        component: ToolbarDivider,
        props: <ToolbarDividerProps>{
          backgroundColor: 'var(--color-cyan-600)',
        },
      },
      {
        component: AliasMenu,
      },
      {
        component: PinyinMenu,
      },
      {
        component: EnglishMenu,
      },
      {
        component: SayAsMenu,
        props: <SayAsProps>{
          cardinal: {
            validate: sayAsValidateMethod,
          },
          digits: {
            validate: sayAsValidateMethod,
          },
          telephone: {
            validate: sayAsValidateMethod,
          },
          name: {
            validate: sayAsValidateMethod,
          },
          address: {
            validate: sayAsValidateMethod,
          },
          id: {
            validate: sayAsValidateMethod,
          },
          characters: {
            validate: sayAsValidateMethod,
          },
          punctuation: {
            validate: sayAsValidateMethod,
          },
          date: {
            validate: sayAsValidateMethod,
          },
          time: {
            validate: sayAsValidateMethod,
          },
          currency: {
            validate: sayAsValidateMethod,
          },
          measure: {
            validate: sayAsValidateMethod,
          },
        },
      },
      {
        component: ToolbarDivider,
        props: <ToolbarDividerProps>{
          backgroundColor: 'var(--color-blue-600)',
        },
      },
      {
        component: UndoMenu,
      },
      {
        component: RedoMenu,
      },
      {
        component: fullScreenMenu,
      },
      {
        component: ToolbarDivider,
        props: <ToolbarDividerProps>{
          backgroundColor: 'var(--color-pink-600)',
        },
      },
      {
        component: SaveMenu,
      },
      {
        component: ExportMenu,
      },
      {
        component: CopyMenu,
      },
      {
        component: CodeMenu,
      },
    ],
    align: RowContainerAlign.CENTER,
  },
  footer: {
    menus: [
      {
        component: SubmitMenu,
        props: <SubmitProps>{
          onClick: (
            code: string,
            editor?: BaseEditor,
            config?: EditorConfig,
          ) => {
            console.log('onClick', code, editor, config);
          },
        },
      },
    ],
    align: RowContainerAlign.END,
    style: {
      marginTop: 'calc(var(--spacing, .25rem) * 2)',
    },
  },
  plugins: [voidElementPlugin, pastePlugin, newLinePlugin],
  modules: [
    SpeakModule,
    BreakModule,
    SoundEventModule,
    PhonemeModule,
    SayAsModule,
    SubModule,
  ],
  normalizers: [SpeakNormalizer],
};
