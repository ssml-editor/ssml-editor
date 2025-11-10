<template>
  <div class="se-bgm-container">
    <span class="se-music-name" v-if="bgmUsageData?.music && bgmUsageData?.musicName">
      {{ bgmUsageData?.musicName }}
      <el-icon class="se-remove-icon" @click="removeHandler">
        <CircleCloseFilled />
      </el-icon>
    </span>
    <el-button v-else @click="show" type="primary" size="small" plain>选择</el-button>
  </div>
  <Dialog title="背景音乐" width="calc(var(--el-dialog-padding-primary) * 2 + 12.5rem)" :modal="true" :append-to-body="true"
    :destroy-on-close="true" v-model="dialogVisible" @submit="submitHandler">
    <bgm-content ref="bgm-content" v-model="bgmContentData" :bgm-category-page-size="bgmCategoryPageSize"
      :bgm-page-size="bgmPageSize" :fetch-bgms="fetchBgms" :fetch-categories="fetchCategories"
      :search-bgms="searchBgms"></bgm-content>
  </Dialog>
</template>

<script setup lang="ts">
import { Dialog } from '@/component';
import { CircleCloseFilled } from '@element-plus/icons-vue';
import { ElButton, ElIcon } from 'element-plus';
import { ref, toRaw, useTemplateRef, watch } from 'vue';
import BgmContent from './bgm-content.vue';
import { BgmContentData } from './data';
import type { BgmContentDataModel, BgmUsageDataModel } from './model';
import type { BgmProps } from './type';

const bgmContentRef = useTemplateRef('bgm-content');
const dialogVisible = ref(false);
const bgmUsageData = ref<BgmUsageDataModel>({});
const bgmContentData = ref<BgmContentDataModel>(new BgmContentData());
const {
  music,
  musicName,
  bgmPageSize,
  bgmCategoryPageSize,
  fetchBgms,
  fetchCategories,
  searchBgms,
} = defineProps<BgmProps & { music?: string; musicName?: string }>();

function show() {
  dialogVisible.value = true;
}

function hide() {
  dialogVisible.value = false;
}

function removeHandler() {
  bgmUsageData.value = {};
}

async function submitHandler() {
  bgmUsageData.value = bgmContentRef.value?.getData() || {};
  hide();
}

function getData(): BgmUsageDataModel {
  return toRaw(bgmUsageData.value);
}

watch(
  () => music,
  (newValue) => {
    bgmUsageData.value.music = newValue;
  },
  {
    immediate: true,
  },
);

watch(
  () => musicName,
  (newValue) => {
    bgmUsageData.value.musicName = newValue;
  },
  {
    immediate: true,
  },
);

defineExpose({
  getData,
});
</script>

<style scoped>
@reference "tailwindcss";

.se-bgm-container {
  .se-music-name {
    .se-remove-icon {
      &:hover {
        @apply text-gray-400;
      }

      @apply text-gray-300 cursor-pointer absolute -top-[0.5rem] -right-[0.5rem];
    }

    @apply break-all box-border border border-(--el-border-color) border-solid rounded-(--el-border-radius-base) relative pl-2 pr-2 pt-1 pb-1;
  }

  @apply box-border border border-(--el-border-color) border-solid text-center overflow-x-hidden overflow-y-auto flex flex-col justify-center items-center pl-2 pr-2 h-50;
}
</style>
