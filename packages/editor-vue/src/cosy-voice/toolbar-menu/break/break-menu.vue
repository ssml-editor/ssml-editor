<template>
  <Button ref="menu-bar-button" icon-class="iconfont-ssml-editor icon-ssml-editor-tingdun"
    @click="menuClickHandler">插入停顿</Button>
  <Dialog title="插入停顿" width="400" :show-close="false" :destroy-on-close="true" v-model="popoverVisible"
    :style="{ margin: margin }" @submit="submitHandler">
    <div class="se-break">
      <el-slider show-input size="small" v-model="time" :min="50" :max="10000" />
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { Dialog } from '@/component';
import { Button, type BaseEditor } from '@ssml-editor/vue';
import { useElementBounding } from '@vueuse/core';
import type { Property } from 'csstype';
import { ElSlider } from 'element-plus';
import { ref, shallowRef, useTemplateRef, type Ref } from 'vue';
import { BreakMenuService } from './break-menu-service';

const { editor } = defineProps<{ editor?: BaseEditor }>();
const breakMenuService = shallowRef<BreakMenuService>();
const popoverVisible = ref(false);
const time = ref(50);
const margin: Ref<Property.Margin<string>> = ref('');
const menuBarButtonRef = useTemplateRef('menu-bar-button')
const { x, y, height } = useElementBounding(menuBarButtonRef as any)

function show() {
  margin.value = `${y.value + height.value}px 0 0 ${x.value}px`
  popoverVisible.value = true;
}

function hide() {
  popoverVisible.value = false;
}

function menuClickHandler() {
  if (editor) {
    breakMenuService.value ??= new BreakMenuService(editor);
    if (!breakMenuService.value.isDisabled()) {
      show();
    }
  }
}

function submitHandler() {
  breakMenuService.value?.setNode(time.value);
  hide();
}
</script>

<style scoped>
@reference "tailwindcss";

.se-break {
  @apply flex flex-col pl-2 pr-2;
}
</style>
