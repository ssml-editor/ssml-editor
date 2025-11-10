<template>
  <div class="se-bgm-content-search">
    <el-form @submit.prevent="searchSubmitHandler">
      <el-input v-model="searchInput" placeholder="搜索背景音乐" clearable @input="searchInputHandler">
        <template #append>
          <el-button @click="searchSubmitHandler" :icon="Search" />
        </template>
      </el-input>
    </el-form>
    <div class="se-bgm-content-search-result" v-if="showSearchResult">
      <select-list v-model="searchMusic" :data-list="searchMusicDataList">
        <template #default="{ model, dataList }">
          <p class="se-music-item" :class="{ activated: item.value === model }" :title="item.label"
            v-for="(item, index) in dataList" :key="index" @click="searchMusicSelectHandler(item)">
            <Player :src="item.value!.toString()"></Player>
            <span class="se-text">{{ item.label }}</span>
          </p>
        </template>
      </select-list>
    </div>
  </div>
  <div class="se-bgm-content-body" :style="{ display: showSearchResult ? 'none' : 'flex' }">
    <list-wrapper title="类型">
      <infinite-scroll v-model="bgmContentData.category" :page-size="bgmCategoryPageSize" :load="fetchCategories"
        @update:model-value="categoryValueChangeHandler" @change="categoryChangeHandler"></infinite-scroll>
    </list-wrapper>
    <list-wrapper title="音乐">
      <infinite-scroll v-if="showMusicList" v-model="bgmContentData.music" :page-size="bgmPageSize"
        :load="fetchMusicList" @change="musicChangeHandler">
        <template #default="{ model, dataList }">
          <p class="se-music-item" :class="{ activated: item.value === model }" :title="item.label"
            v-for="(item, index) in dataList" :key="index" @click="musicSelectHandler(item)">
            <Player :src="item.value!.toString()"></Player>
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
import { BgmContentData } from './data';
import { type BgmContentDataModel, type BgmUsageDataModel } from './model';
import type { BgmProps } from './type';

const showSearchResult = ref(false);
const showMusicList = ref(false);
const searchInput = ref('');
const categoryDataList = ref<LabelValue[]>([]);
const musicDataList = ref<LabelValue[]>([]);
const searchMusicDataList = ref<LabelValue[]>([]);
const searchMusic = ref<string>();
const bgmContentData = defineModel<BgmContentDataModel>({
  default: new BgmContentData(),
});
const {
  bgmPageSize = 10,
  bgmCategoryPageSize = 10,
  fetchBgms = () => Promise.resolve([]),
  fetchCategories = () => Promise.resolve([]),
  searchBgms = () => Promise.resolve([]),
} = defineProps<BgmProps>();

function getMusicName(
  music: string,
  musicDataList: LabelValue[],
): string | undefined {
  for (const s of musicDataList) {
    if (s.value === music) {
      return s.label;
    }
  }
}

function searchInputHandler(value: string) {
  if (value.trim() === '') {
    showSearchResult.value = false;
    searchMusicDataList.value = [];
  } else {
    showSearchResult.value = true;
  }
}

function categoryValueChangeHandler() {
  showMusicList.value = false;
  nextTick(() => {
    showMusicList.value = true;
  });
}

async function fetchMusicList(page: number): Promise<LabelValue[]> {
  const bgms = await fetchBgms({
    page,
    category: bgmContentData.value.category,
  });
  return bgms.map((item) => ({
    label: item.name,
    value: item.src,
  }));
}

async function categoryChangeHandler(categoryData: LabelValue[]) {
  showMusicList.value = false;
  if (categoryData.length > 0) {
    categoryDataList.value = categoryData;
    if (
      !bgmContentData.value.category ||
      !categoryData.some((item) => item.value === bgmContentData.value.category)
    ) {
      bgmContentData.value.category = categoryData[0].value as string;
    }
    nextTick(() => {
      showMusicList.value = true;
    });
  }
}

async function musicChangeHandler(musicData: LabelValue[]) {
  if (musicData.length > 0) {
    musicDataList.value = musicData;
    if (
      !bgmContentData.value.music ||
      !musicData.some((item) => item.value === bgmContentData.value.music)
    ) {
      bgmContentData.value.music = musicData[0].value as string;
    }
  }
}

async function searchSubmitHandler() {
  searchMusic.value = undefined;
  searchMusicDataList.value = [];
  const bgms = await searchBgms({
    word: searchInput.value,
  });
  if (bgms.length > 0) {
    searchMusicDataList.value = bgms.map((item) => ({
      label: item.name,
      value: item.src,
    }));
    searchMusic.value = bgms[0].src;
  }
}

function musicSelectHandler(item: LabelValue) {
  bgmContentData.value.music = item.value as string;
}

function searchMusicSelectHandler(item: LabelValue) {
  searchMusic.value = item.value as string;
}

function getData(): BgmUsageDataModel {
  let musicName: string | undefined = undefined;
  if (showSearchResult.value) {
    if (searchMusic.value) {
      musicName = getMusicName(searchMusic.value, searchMusicDataList.value);
    }
    return { music: searchMusic.value, musicName };
  } else {
    const data = toRaw(bgmContentData.value);
    if (data.music) {
      musicName = getMusicName(data.music, musicDataList.value);
    }
    return { ...data, musicName };
  }
}

defineExpose({
  getData,
});
</script>

<style scoped>
@reference "tailwindcss";

.se-music-item {
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

.se-bgm-content-search {
  .se-bgm-content-search-result {
    @apply mt-2;
  }
}

.se-bgm-content-body {
  >*:not(:last-child) {
    :deep(> *:last-child) {
      @apply border-r-0;
    }
  }

  @apply flex flex-row;
}
</style>
