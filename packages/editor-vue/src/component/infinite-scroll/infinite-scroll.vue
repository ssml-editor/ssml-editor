<template>
  <div class="se-infinite-scrollbar">
    <el-scrollbar ref="scrollbar" native wrap-class="se-scrollbar-wrap" :distance="1" @end-reached="scrollLoad"
      v-if="dataList.length > 0">
      <slot :model="model" :dataList="dataList">
        <p class="se-item" :class="{ activated: item.value === model }" v-for="(item, index) in dataList" :key="index"
          @click="selectHandler(item)">
          {{ item.label }}
        </p>
      </slot>
      <div class="se-loading" v-if="loadingShowed">Loading...</div>
      <div class="se-no-more" v-if="dataList.length > 0 && showNoMore && noMoreShowed">
        - No more -
      </div>
    </el-scrollbar>
    <div class="se-blank" v-else>
      <Blank :type="BlankType.LIST" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type LabelValue } from '@ssml-editor/core';
import { Blank, BlankType } from '@ssml-editor/vue';
import { ElScrollbar, type ScrollbarDirection } from 'element-plus';
import { nextTick, onMounted, ref, toRaw, useTemplateRef, watch } from 'vue';

const scrollbarRef = useTemplateRef('scrollbar');
const model = defineModel<string | number | undefined>();
const {
  pageSize,
  showNoMore = false,
  load = () => [],
} = defineProps<{
  pageSize?: number;
  showNoMore?: boolean;
  load: (page: number) => LabelValue[] | Promise<LabelValue[]>;
}>();
const emit = defineEmits<{ change: [dataList: LabelValue[]] }>();
const loadingShowed = ref(false);
const noMoreShowed = ref(false);
const dataList = ref<LabelValue[]>([]);
const page = ref(1);

async function scrollLoad(direction: ScrollbarDirection) {
  if (direction === 'bottom') {
    if (!loadingShowed.value && !noMoreShowed.value) {
      loadingShowed.value = true;
      const result = await load(page.value);
      loadingShowed.value = false;
      if (result.length > 0) {
        dataList.value = [...dataList.value, ...result];
        if (pageSize && pageSize > 0) {
          if (result.length < pageSize) {
            noMoreShowed.value = true;
          } else {
            page.value += 1;
          }
        } else {
          page.value += 1;
        }
      } else {
        noMoreShowed.value = true;
      }
    }
  }
}

function selectHandler(item: LabelValue) {
  model.value = item.value;
}

function scrollIntoView() {
  if (scrollbarRef.value && dataList.value.length > 0) {
    for (let i = 0; i < dataList.value.length; i++) {
      if (dataList.value[i].value === model.value) {
        if (scrollbarRef.value.wrapRef && scrollbarRef.value.wrapRef.children.length > 0) {
          const wrapElement = scrollbarRef.value.wrapRef.children[0];
          const elements = wrapElement.children
          scrollbarRef.value.scrollTo({
            top: elements[i].getBoundingClientRect().top - wrapElement.getBoundingClientRect().top,
          });
        }
        return;
      }
    }
  }
}

watch(
  dataList,
  (newValue) => {
    emit('change', toRaw(newValue));
  },
  {
    deep: true,
    immediate: true,
  },
);

onMounted(async () => {
  await scrollLoad('bottom');
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

.se-infinite-scrollbar {
  :deep(.se-scrollbar-wrap) {
    @apply scrollbar-thin;
  }

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
    @apply w-full h-full pt-[0] pb-[0] flex flex-col justify-center items-center;
  }

  .se-loading {
    @apply text-gray-300 text-(length:--text-xxs) leading-(--text-xxs--line-height);
  }

  .se-no-more {
    @apply text-gray-300 text-(length:--text-xxs) leading-(--text-xxs--line-height);
  }

  @apply box-border border border-(--el-border-color) border-solid text-center h-50;
}
</style>
