import {
  Howl,
  Howler,
  type HowlCallback,
  type HowlErrorCallback,
  type HowlOptions,
} from 'howler';
import { isFunction } from 'is-what';
import { AudioPlayerStatus } from './audio-player.enum';
import type {
  AudioPlayerErrorChangeListener,
  AudioPlayerEvent,
  AudioPlayerEventListener,
  AudioPlayerEventListenerList,
  AudioPlayerStatusChangeListener,
  HowlErrorEvent,
  HowlEvent,
} from './audio-player.type';

Howler.html5PoolSize = 100;

export class AudioPlayer extends Howl {
  constructor(options: HowlOptions) {
    options = { ...AudioPlayer.DefaultOptions, ...options };
    super(options);
    this.options = options;
    this.initEvents();
  }

  private _error: unknown = undefined;
  private _status: AudioPlayerStatus = AudioPlayerStatus.UNLOADED;
  private _soundId: number | undefined = undefined;
  private _eventListeners: AudioPlayerEventListenerList = {
    errorchange: [],
    statuschange: [],
    load: [],
    play: [],
    end: [],
    pause: [],
    stop: [],
    mute: [],
    volume: [],
    rate: [],
    seek: [],
    fade: [],
    unlock: [],
    loaderror: [],
    playerror: [],
  };

  readonly options: Readonly<HowlOptions>;
  readonly eventListenerList: Readonly<AudioPlayerEventListenerList> =
    this._eventListeners;

  get error(): unknown {
    return this._error;
  }

  set error(value: unknown) {
    if (value !== this._error) {
      this._error = value;
      this._eventListeners['errorchange'].forEach(
        (callback: AudioPlayerErrorChangeListener) => {
          callback(value, this._soundId);
        },
      );
    }
  }

  get status(): AudioPlayerStatus {
    return this._status;
  }

  set status(value: AudioPlayerStatus) {
    if (value !== this._status) {
      this._status = value;
      this._eventListeners['statuschange'].forEach(
        (callback: AudioPlayerStatusChangeListener) => {
          callback(value, this._soundId);
        },
      );
    }
  }

  get soundId(): number | undefined {
    return this._soundId;
  }

  set soundId(value: number | undefined) {
    if (value !== this._soundId) {
      this._soundId = value;
    }
  }

  private initEvents() {
    super.on('loaderror', (soundId: number, error: unknown) => {
      this.soundId = soundId;
      this.error = error;
      this.status = AudioPlayerStatus.LOAD_ERROR;
      this._eventListeners['loaderror'].forEach(
        (callback: HowlErrorCallback) => {
          callback(soundId, error);
        },
      );
    });
    super.on('playerror', (soundId: number, error: unknown) => {
      this.soundId = soundId;
      this.error = error;
      this.status = AudioPlayerStatus.PLAY_ERROR;
      this._eventListeners['playerror'].forEach(
        (callback: HowlErrorCallback) => {
          callback(soundId, error);
        },
      );
    });
    super.on('load', () => {
      const status = AudioPlayerStatus.fromString(this.state());
      if (status) {
        this.status = status;
      }
      this._eventListeners['load'].forEach((callback: () => void) => {
        callback();
      });
    });
    super.on('play', (soundId: number) => {
      this.soundId = soundId;
      this.status = AudioPlayerStatus.PLAYING;
      this._eventListeners['play'].forEach((callback: HowlCallback) => {
        callback(soundId);
      });
    });
    super.on('pause', (soundId: number) => {
      this.soundId = soundId;
      this.status = AudioPlayerStatus.PAUSING;
      this._eventListeners['pause'].forEach((callback: HowlCallback) => {
        callback(soundId);
      });
    });
    super.on('stop', (soundId: number) => {
      this.soundId = soundId;
      this.status = AudioPlayerStatus.STOPPING;
      this._eventListeners['stop'].forEach((callback: HowlCallback) => {
        callback(soundId);
      });
    });
    super.on('end', (soundId: number) => {
      this.soundId = soundId;
      this.status = AudioPlayerStatus.ENDED;
      this._eventListeners['end'].forEach((callback: HowlCallback) => {
        callback(soundId);
      });
    });
    super.on('mute', (soundId: number) => {
      this._eventListeners['mute'].forEach((callback: HowlCallback) => {
        callback(soundId);
      });
    });
    super.on('volume', (soundId: number) => {
      this._eventListeners['volume'].forEach((callback: HowlCallback) => {
        callback(soundId);
      });
    });
    super.on('rate', (soundId: number) => {
      this._eventListeners['rate'].forEach((callback: HowlCallback) => {
        callback(soundId);
      });
    });
    super.on('seek', (soundId: number) => {
      this._eventListeners['seek'].forEach((callback: HowlCallback) => {
        callback(soundId);
      });
    });
    super.on('fade', (soundId: number) => {
      this._eventListeners['fade'].forEach((callback: HowlCallback) => {
        callback(soundId);
      });
    });
    super.on('unlock', (soundId: number) => {
      this._eventListeners['unlock'].forEach((callback: HowlCallback) => {
        callback(soundId);
      });
    });
  }

  replaceEventListeners(eventListeners: AudioPlayerEventListenerList) {
    Object.keys(eventListeners).forEach((key) => {
      const listeners =
        this._eventListeners[key as keyof AudioPlayerEventListenerList];
      listeners.splice(
        0,
        listeners.length,
        ...(eventListeners[key as keyof AudioPlayerEventListenerList] as any),
      );
    });
  }

  override on(
    event: 'errorchange',
    callback: AudioPlayerErrorChangeListener,
  ): this;
  override on(
    event: 'statuschange',
    callback: AudioPlayerStatusChangeListener,
  ): this;
  override on(event: 'load', callback: () => void): this;
  override on(event: HowlErrorEvent, callback: HowlErrorCallback): this;
  override on(event: HowlEvent, callback: HowlCallback): this;
  override on(
    event: AudioPlayerEvent,
    callback: AudioPlayerEventListener,
  ): this;
  override on(
    event: AudioPlayerEvent,
    callback: AudioPlayerEventListener,
  ): this {
    this._eventListeners[event].unshift(callback as any);
    return this;
  }

  override off(): this;
  override off(
    event: 'errorchange',
    callback?: AudioPlayerErrorChangeListener,
  ): this;
  override off(
    event: 'statuschange',
    callback?: AudioPlayerStatusChangeListener,
  ): this;
  override off(event: 'load', callback?: () => void): this;
  override off(event: HowlErrorEvent, callback?: HowlErrorCallback): this;
  override off(event: HowlEvent, callback?: HowlCallback): this;
  override off(
    event?: AudioPlayerEvent,
    callback?: AudioPlayerEventListener,
  ): this;
  override off(
    event?: AudioPlayerEvent,
    callback?: AudioPlayerEventListener,
  ): this {
    if (event) {
      if (!callback) {
        this._eventListeners[event].splice(0);
      } else if (isFunction(callback)) {
        const listeners = this._eventListeners[event];
        for (let i = listeners.length - 1; i >= 0; i--) {
          if (listeners[i] === callback) {
            listeners.splice(i, 1);
          }
        }
      }
    } else {
      Object.keys(this._eventListeners).forEach((key) => {
        this._eventListeners[key as keyof typeof this._eventListeners].splice(
          0,
        );
      });
    }
    return this;
  }

  override once(
    event: 'errorchange',
    callback: AudioPlayerErrorChangeListener,
  ): this;
  override once(
    event: 'statuschange',
    callback: AudioPlayerStatusChangeListener,
  ): this;
  override once(event: 'load', callback: () => void): this;
  override once(event: HowlErrorEvent, callback: HowlErrorCallback): this;
  override once(event: HowlEvent, callback: HowlCallback): this;
  override once(
    event: AudioPlayerEvent,
    callback: AudioPlayerEventListener,
  ): this;
  override once(
    event: AudioPlayerEvent,
    callback: AudioPlayerEventListener,
  ): this {
    const wrapper = (...args: any[]) => {
      (callback as any).apply(this, args);
      this.off(event, wrapper);
    };
    this._eventListeners[event].unshift(wrapper);
    return this;
  }

  static DefaultOptions: HowlOptions = {
    src: [],
    html5: true,
    preload: 'metadata',
  };
}
