import type { HowlCallback, HowlErrorCallback } from 'howler';
import type { AudioPlayerStatus } from './audio-player.enum';

export type AudioPlayerErrorChangeListener = (
  error: unknown,
  soundId?: number,
) => void;
export type AudioPlayerStatusChangeListener = (
  status: AudioPlayerStatus,
  soundId?: number,
) => void;
export type HowlListener = HowlCallback | HowlErrorCallback;
export type HowlErrorEvent = 'loaderror' | 'playerror';
export type HowlEvent =
  | 'play'
  | 'end'
  | 'pause'
  | 'stop'
  | 'mute'
  | 'volume'
  | 'rate'
  | 'seek'
  | 'fade'
  | 'unlock';
export type AudioPlayerEvent =
  | HowlEvent
  | HowlErrorEvent
  | 'statuschange'
  | 'errorchange'
  | 'load';
export type AudioPlayerEventListener =
  | HowlCallback
  | HowlErrorCallback
  | AudioPlayerStatusChangeListener
  | AudioPlayerErrorChangeListener
  | (() => void);
export type AudioPlayerEventMap = {
  errorchange: AudioPlayerErrorChangeListener;
  statuschange: AudioPlayerStatusChangeListener;
  load: () => void;
} & {
  [K in HowlErrorEvent]: HowlErrorCallback;
} & {
  [K in HowlEvent]: HowlCallback;
};
export type AudioPlayerEventListenerList = {
  [K in keyof AudioPlayerEventMap]: AudioPlayerEventMap[K][];
};
