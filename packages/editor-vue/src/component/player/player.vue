<template>
  <i class="iconfont-ssml-editor icon-ssml-editor-zanting" :class="pauseClassName" v-if="
    playerSrc === src &&
    (playerStatus === AudioPlayerStatus.LOADING ||
      playerStatus === AudioPlayerStatus.PLAYING)
  " @click="pauseHandler()"></i>
  <i class="iconfont-ssml-editor icon-ssml-editor-bofang" :class="playClassName" v-else @click="playHandler()"></i>
</template>

<script setup lang="ts">
import { AudioPlayerSingleton, AudioPlayerStatus } from '@ssml-editor/modules';
import { onMounted, onUnmounted, ref } from 'vue';

const playerSrc = ref<string | string[]>();
const playerStatus = ref<AudioPlayerStatus>();
const {
  src,
  playClassName = 'se-player-play',
  pauseClassName = 'se-player-pause',
} = defineProps<{
  src: string;
  playClassName?: string;
  pauseClassName?: string;
}>();
const emit = defineEmits<{ statuschange: [status: AudioPlayerStatus] }>();

function playHandler() {
  AudioPlayerSingleton.play({ src });
}

function pauseHandler() {
  AudioPlayerSingleton.pause();
}

function playerStatusChangeHandler(status: AudioPlayerStatus) {
  playerSrc.value = AudioPlayerSingleton.options?.src;
  playerStatus.value = status;
  emit('statuschange', status);
}

onMounted(() => {
  AudioPlayerSingleton.on('statuschange', playerStatusChangeHandler);
});

onUnmounted(() => {
  AudioPlayerSingleton.stop().unload();
  AudioPlayerSingleton.off('statuschange', playerStatusChangeHandler);
});
</script>

<style scoped></style>
