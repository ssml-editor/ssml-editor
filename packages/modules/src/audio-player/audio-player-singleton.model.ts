import type { HowlCallback, HowlErrorCallback, HowlOptions } from 'howler';
import type { AudioPlayerStatus } from './audio-player.enum';
import type {
  AudioPlayerErrorChangeListener,
  AudioPlayerEvent,
  AudioPlayerEventListener,
  AudioPlayerEventListenerList,
  AudioPlayerStatusChangeListener,
  HowlErrorEvent,
  HowlEvent,
} from './audio-player.type';

export interface AudioPlayerSingletonModel {
  readonly eventListenerList?: Readonly<AudioPlayerEventListenerList>;
  readonly options?: Readonly<HowlOptions>;
  readonly error?: unknown;
  readonly status?: AudioPlayerStatus;
  readonly soundId?: number;
  play(options?: HowlOptions): this;
  pause(): this;
  stop(): this;
  load(): this;
  unload(): this;
  on(event: 'errorchange', callback: AudioPlayerErrorChangeListener): this;
  on(event: 'statuschange', callback: AudioPlayerStatusChangeListener): this;
  on(event: 'load', callback: () => void): this;
  on(event: HowlErrorEvent, callback: HowlErrorCallback): this;
  on(event: HowlEvent, callback: HowlCallback): this;
  on(event: AudioPlayerEvent, callback: AudioPlayerEventListener): this;
  off(): this;
  off(event: 'errorchange', callback?: AudioPlayerErrorChangeListener): this;
  off(event: 'statuschange', callback?: AudioPlayerStatusChangeListener): this;
  off(event: 'load', callback?: () => void): this;
  off(event: HowlErrorEvent, callback?: HowlErrorCallback): this;
  off(event: HowlEvent, callback?: HowlCallback): this;
  off(event?: AudioPlayerEvent, callback?: AudioPlayerEventListener): this;
  once(event: 'errorchange', callback: AudioPlayerErrorChangeListener): this;
  once(event: 'statuschange', callback: AudioPlayerStatusChangeListener): this;
  once(event: 'load', callback: () => void): this;
  once(event: HowlErrorEvent, callback: HowlErrorCallback): this;
  once(event: HowlEvent, callback: HowlCallback): this;
  once(event: AudioPlayerEvent, callback: AudioPlayerEventListener): this;
}
