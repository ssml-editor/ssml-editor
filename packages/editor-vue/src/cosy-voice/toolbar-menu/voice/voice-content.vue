<template>
  <div class="se-voice-content-search">
    <el-form @submit.prevent="searchSubmitHandler">
      <el-input v-model="searchInput" placeholder="搜索音色" clearable @input="searchInputHandler">
        <template #append>
          <el-button @click="searchSubmitHandler" :icon="Search" />
        </template>
      </el-input>
    </el-form>
    <div class="se-voice-content-search-result" v-if="showSearchResult">
      <select-list v-model="searchSelectedVoice.value" :data-list="searchVoiceDataList">
        <template #default="{ model, dataList }">
          <p class="se-voice-item" :class="{ activated: item.value === model }" :title="item.label"
            v-for="(item, index) in dataList" :key="index" @click="voiceSearchSelectHandler(item)">
            <Player :src="item.src"></Player>
            <span class="se-text">{{ item.label }}</span>
          </p>
        </template>
      </select-list>
    </div>
  </div>
  <div class="se-voice-content-body" :style="{ display: showSearchResult ? 'none' : 'flex' }">
    <list-wrapper title="类型">
      <infinite-scroll v-model="voiceContentData.categoryValue" :page-size="categoryPageSize" :load="fetchCategories"
        @update:model-value="categoryValueChangeHandler" @change="categoryChangeHandler"></infinite-scroll>
    </list-wrapper>
    <list-wrapper title="音色">
      <infinite-scroll v-if="showVoiceList" v-model="voiceContentData.voiceValue" :page-size="voicePageSize"
        :load="fetchVoiceList" @change="voiceChangeHandler">
        <template #default="{ model, dataList }">
          <p class="se-voice-item" :class="{ activated: item.value === model }" :title="item.label"
            v-for="(item, index) in dataList" :key="index" @click="voiceSelectHandler(item)">
            <Player :src="item.src"></Player>
            <span class="se-text">{{ item.label }}</span>
          </p>
        </template>
      </infinite-scroll>
    </list-wrapper>
  </div>
</template>

<script setup lang="ts">
import { InfiniteScroll, Player } from '@/component';
import { Search } from '@element-plus/icons-vue';
import type { LabelValue } from '@ssml-editor/core';
import { ListWrapper, SelectList } from '@ssml-editor/vue';
import { ElButton, ElForm, ElInput } from 'element-plus';
import { nextTick, ref, toRaw } from 'vue';
import { VoiceContentData } from './data';
import { type VoiceContentDataModel } from './model';
import type { VoiceProps } from './type';

const showSearchResult = ref(false);
const showVoiceList = ref(false);
const searchInput = ref('');
const categoryDataList = ref<(LabelValue & Record<string, any>)[]>([]);
const voiceDataList = ref<(LabelValue & Record<string, any>)[]>([]);
const searchVoiceDataList = ref<(LabelValue & Record<string, any>)[]>([]);
const searchSelectedVoice = ref<{
  name?: string;
  value?: string;
  src?: string;
}>({});
const voiceContentData = defineModel<VoiceContentDataModel>({
  default: new VoiceContentData(),
});
const {
  categoryPageSize = 10,
  voicePageSize = 10,
  fetchVoices = () => Promise.resolve([]),
  fetchCategories = () => Promise.resolve([]),
  searchVoices = () => Promise.resolve([]),
} = defineProps<VoiceProps>();

function searchInputHandler(value: string) {
  if (value.trim() === '') {
    showSearchResult.value = false;
    searchVoiceDataList.value = [];
  } else {
    showSearchResult.value = true;
  }
}

function categoryValueChangeHandler() {
  showVoiceList.value = false;
  nextTick(() => {
    showVoiceList.value = true;
  });
}

async function fetchVoiceList(
  page: number,
): Promise<(LabelValue & Record<string, any>)[]> {
  const voices = await fetchVoices({
    page,
    category: voiceContentData.value.categoryValue,
  });
  return voices.map((item) => ({
    label: item.name,
    value: item.value,
    src: item.src,
  }));
}

async function categoryChangeHandler(
  categoryData: (LabelValue & Record<string, any>)[],
) {
  showVoiceList.value = false;
  if (categoryData.length > 0) {
    categoryDataList.value = categoryData;
    if (
      !voiceContentData.value.categoryValue ||
      !categoryData.some(
        (item) => item.value === voiceContentData.value.categoryValue,
      )
    ) {
      voiceContentData.value.categoryName = categoryData[0].label;
      voiceContentData.value.categoryValue = categoryData[0].value as string;
    }
    nextTick(() => {
      showVoiceList.value = true;
    });
  }
}

async function voiceChangeHandler(
  voiceData: (LabelValue & Record<string, any>)[],
) {
  if (voiceData.length > 0) {
    voiceDataList.value = voiceData;
    if (
      !voiceContentData.value.voiceValue ||
      !voiceData.some(
        (item) => item.value === voiceContentData.value.voiceValue,
      )
    ) {
      voiceContentData.value.voiceName = voiceData[0].label;
      voiceContentData.value.voiceValue = voiceData[0].value as string;
      voiceContentData.value.voiceSrc = voiceData[0].src;
    }
  }
}

async function searchSubmitHandler() {
  searchVoiceDataList.value = [];
  const voices = await searchVoices({
    word: searchInput.value,
  });
  if (voices.length > 0) {
    searchVoiceDataList.value = voices.map((item) => ({
      label: item.name,
      value: item.value,
      src: item.src,
    }));
    searchSelectedVoice.value = {
      ...voices[0],
    };
  }
}

function voiceSelectHandler(item: LabelValue & Record<string, any>) {
  voiceContentData.value.voiceName = item.label as string;
  voiceContentData.value.voiceValue = item.value as string;
  voiceContentData.value.voiceSrc = item.src;
}

function voiceSearchSelectHandler(item: LabelValue & Record<string, any>) {
  searchSelectedVoice.value = {
    name: item.label,
    value: item.value as string,
    src: item.src,
  };
}

function getData(): VoiceContentDataModel {
  if (showSearchResult.value) {
    return {
      voiceName: searchSelectedVoice.value?.name,
      voiceValue: searchSelectedVoice.value?.value,
      voiceSrc: searchSelectedVoice.value?.src,
    };
  } else {
    return toRaw(voiceContentData.value);
  }
}

defineExpose({
  getData,
});
</script>

<style scoped>
@reference "tailwindcss";

.se-voice-item {
  &.activated {
    @apply text-blue-500;
  }

  &:hover {
    @apply bg-(--color-li-hover-bg);
  }

  .se-text {
    @apply text-xs text-start overflow-hidden whitespace-nowrap text-ellipsis min-w-[0] flex-1 ml-1;
  }

  :deep(.se-player-play),
  :deep(.se-player-pause) {
    @apply text-xs;
  }

  @apply m-[0] pt-1 pb-1 pl-1 pr-1 cursor-pointer flex justify-between items-center;
}

.se-voice-content-search {
  .se-voice-content-search-result {
    @apply mt-2;
  }
}

.se-voice-content-body {
  >*:not(:last-child) {
    :deep(> *:last-child) {
      @apply border-r-0;
    }
  }

  @apply flex flex-row;
}
</style>
