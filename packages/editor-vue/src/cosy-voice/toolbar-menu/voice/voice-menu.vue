<template>
  <Button ref="menu-bar-button" icon-class="iconfont-ssml-editor icon-ssml-editor-duoren"
    @click="menuClickHandler">音色</Button>
  <Dialog title="音色" width="calc(var(--el-dialog-padding-primary) * 2 + 12.5rem)" :destroy-on-close="true"
    v-model="dialogVisible" :style="{ margin: margin }" @submit="submitHandler">
    <voice-content ref="voice-content" v-model="voiceContentData" v-bind="props"></voice-content>
  </Dialog>
</template>

<script setup lang="ts">
import { Dialog } from '@/component';
import { Button, type BaseEditor, type EditorConfig } from '@ssml-editor/vue';
import { useElementBounding } from '@vueuse/core';
import type { Property } from 'csstype';
import { ref, useTemplateRef, watch, type Ref } from 'vue';
import { VOICE_CONTENT_DATA_STORE_KEY } from './constant';
import { VoiceContentData } from './data';
import { type VoiceContentDataModel } from './model';
import type { VoiceProps } from './type';
import VoiceContent from './voice-content.vue';
import { VoiceMenuUtils } from './voice-menu-utils';
import { VoiceStorageType } from './voice-storage-type.enum';

const menuBarButtonRef = useTemplateRef('menu-bar-button');
const voiceContentRef = useTemplateRef('voice-content');
const dialogVisible = ref(false);
const voiceContentData = ref<VoiceContentDataModel>(new VoiceContentData());
const { x, y, height } = useElementBounding(menuBarButtonRef as any);
const margin: Ref<Property.Margin<string>> = ref('');
const props = withDefaults(
  defineProps<VoiceProps & { config?: EditorConfig; editor?: BaseEditor }>(),
  {
    storageType: VoiceStorageType.NONE,
    storeName: VOICE_CONTENT_DATA_STORE_KEY,
    reader: () => {
      return Promise.resolve(undefined);
    },
    saver: () => {
      return Promise.resolve(true);
    },
  },
);

function show() {
  margin.value = `${y.value + height.value}px 0 0 ${x.value}px`;
  dialogVisible.value = true;
}

function hide() {
  dialogVisible.value = false;
}

async function menuClickHandler() {
  const { editor } = props;
  if (editor) {
    const data = await VoiceMenuUtils.getData(editor);
    data && (voiceContentData.value = data);
    show();
  }
}

async function submitHandler() {
  const { editor, config, storageType, storeName, saver } = props;
  const data = voiceContentRef.value?.getData();
  if (data && editor && config && config.databaseName) {
    await VoiceMenuUtils.saveData(
      editor,
      config.databaseName,
      storageType,
      storeName,
      saver,
      data,
    );
  }
  hide();
}

watch(
  props,
  (newValue) => {
    const { editor, config, storageType, storeName, reader } = newValue;
    if (editor && config && config.databaseName) {
      VoiceMenuUtils.setProps(editor, {
        storageType,
        storeName,
        reader,
        databaseName: config.databaseName,
      });
    }
  },
  {
    immediate: true,
  },
);
</script>

<style scoped></style>
