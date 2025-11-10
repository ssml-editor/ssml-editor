import { type HowlOptions } from 'howler';
import { isFunction } from 'is-what';
import { AudioPlayer } from './audio-player';
import type { AudioPlayerSingletonModel } from './audio-player-singleton.model';
import { AudioPlayerStatus } from './audio-player.enum';
import type {
  AudioPlayerEvent,
  AudioPlayerEventListener,
  AudioPlayerEventListenerList,
} from './audio-player.type';

export const AudioPlayerSingleton: AudioPlayerSingletonModel = Object.freeze(
  () => {
    let audioPlayer: AudioPlayer | undefined = undefined;

    const eventListeners: AudioPlayerEventListenerList = {
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

    return <AudioPlayerSingletonModel>{
      get eventListenerList(): AudioPlayerEventListenerList | undefined {
        return audioPlayer?.eventListenerList;
      },
      get options(): HowlOptions | undefined {
        return audioPlayer?.options;
      },
      get error(): unknown | undefined {
        return audioPlayer?.error;
      },
      get status(): AudioPlayerStatus | undefined {
        return audioPlayer?.status;
      },
      get soundId(): number | undefined {
        return audioPlayer?.soundId;
      },
      play(options?: HowlOptions): AudioPlayerSingletonModel {
        if (options) {
          if (audioPlayer) {
            const pOptions = audioPlayer.options;
            if (
              pOptions.src !== options.src ||
              pOptions.volume !== options.volume ||
              pOptions.loop !== options.loop ||
              pOptions.rate !== options.rate
            ) {
              audioPlayer.stop().unload();
              audioPlayer = new AudioPlayer(options);
              audioPlayer?.replaceEventListeners(eventListeners);
            }
          } else {
            audioPlayer = new AudioPlayer(options);
            audioPlayer?.replaceEventListeners(eventListeners);
          }
        }
        if (audioPlayer && audioPlayer.status !== AudioPlayerStatus.PLAYING) {
          audioPlayer?.play();
        }
        return this;
      },
      pause(): AudioPlayerSingletonModel {
        audioPlayer?.pause();
        return this;
      },
      stop(): AudioPlayerSingletonModel {
        audioPlayer?.stop();
        return this;
      },
      load(): AudioPlayerSingletonModel {
        audioPlayer?.load();
        return this;
      },
      unload(): AudioPlayerSingletonModel {
        audioPlayer?.unload();
        return this;
      },
      on(
        event: AudioPlayerEvent,
        callback: AudioPlayerEventListener,
      ): AudioPlayerSingletonModel {
        eventListeners[event].unshift(callback as any);
        audioPlayer?.replaceEventListeners(eventListeners);
        return this;
      },
      off(
        event?: AudioPlayerEvent,
        callback?: AudioPlayerEventListener,
      ): AudioPlayerSingletonModel {
        if (event) {
          if (!callback) {
            eventListeners[event].splice(0);
          } else if (isFunction(callback)) {
            const listeners = eventListeners[event];
            for (let i = listeners.length - 1; i >= 0; i--) {
              if (listeners[i] === callback) {
                listeners.splice(i, 1);
              }
            }
          }
        } else {
          Object.keys(eventListeners).forEach((key) => {
            eventListeners[key as keyof typeof eventListeners].splice(0);
          });
        }
        audioPlayer?.replaceEventListeners(eventListeners);
        return this;
      },
      once(
        event: AudioPlayerEvent,
        callback: AudioPlayerEventListener,
      ): AudioPlayerSingletonModel {
        const wrapper = (...args: any[]) => {
          (callback as any).apply(this, args);
          this.off(event, wrapper);
        };
        eventListeners[event].unshift(wrapper);
        audioPlayer?.replaceEventListeners(eventListeners);
        return this;
      },
    };
  },
)();
