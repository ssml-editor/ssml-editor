<template>
  <div ref="select-list-div" class="se-select-list">
    <slot :model="model" :dataList="dataList" v-if="dataList.length > 0">
      <p class="se-item" :class="{ activated: item.value === model }" v-for="(item, index) in dataList" :key="index"
        @click="selectHandler(item)">
        {{ item.label }}
      </p>
    </slot>
    <div class="se-blank" v-else>
      <Blank :type="BlankType.LIST" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Blank, BlankType } from '@/component';
import type { LabelValue } from '@ssml-editor/core';
import { nextTick, onMounted, useTemplateRef } from 'vue';

const selectListDivRef = useTemplateRef('select-list-div');
const model = defineModel<string | number | undefined>({ default: undefined });
const { dataList = [] } = defineProps<{ dataList?: LabelValue[] }>();

function selectHandler(item: LabelValue) {
  model.value = item.value;
}

function scrollIntoView() {
  if (selectListDivRef.value && dataList.length > 0) {
    for (let i = 0; i < dataList.length; i++) {
      if (dataList[i].value === model.value) {
        selectListDivRef.value.children[i]?.scrollIntoView({
          behavior: 'smooth',
        });
        return;
      }
    }
  }
}

onMounted(() => {
  nextTick(() => {
    scrollIntoView();
  });
});
</script>

<style scoped>
@reference "tailwindcss";

@plugin 'tailwind-scrollbar' {
  nocompatible: true;
}

.se-select-list {
  .se-item {
    &.activated {
      @apply text-blue-500;
    }

    &:hover {
      @apply bg-(--color-li-hover-bg);
    }

    @apply text-xs m-[0] pt-1 pb-1 cursor-pointer;
  }

  .se-blank {
    @apply w-full h-full flex flex-col justify-center items-center;
  }

  @apply box-border border border-(--el-border-color) border-solid text-center h-50 overflow-x-hidden overflow-y-auto scrollbar-thin;
}
</style>
