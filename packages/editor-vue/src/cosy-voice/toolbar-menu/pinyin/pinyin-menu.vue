<template>
  <popover width="auto" v-model="popoverVisible" :show-footer="false">
    <template #reference>
      <Button icon-class="iconfont-ssml-editor icon-ssml-editor-pinyin" @click="menuClickHandler">拼音</Button>
    </template>
    <ul class="se-pinyin">
      <li v-for="(item, index) in pinyinList" :key="index" @click="listItemClickHandler(item)">
        {{ item.label }}
      </li>
    </ul>
  </popover>
</template>

<script setup lang="ts">
import { Popover } from '@/component'
import { type Phoneme, Alphabet, PHONEME_TYPE } from '@/cosy-voice'
import { Warning } from '@ssml-editor/base'
import type { LabelValue } from '@ssml-editor/core'
import { type BaseEditor, type BaseElement, Button, EditorUtils } from '@ssml-editor/vue'
import { onUnmounted, ref, shallowRef, watch } from 'vue'
import { PinyinMenuService } from './pinyin-menu-service'
import { PinyinUtils } from './pinyin-utils'

const props = defineProps<{ editor?: BaseEditor }>()
const popoverVisible = ref(false)
const pinyinList = ref<LabelValue[]>([])
const pinyinMenuService = shallowRef<PinyinMenuService>()

function show() {
  popoverVisible.value = true
}

function hide() {
  popoverVisible.value = false
}

function getPinyinList(text: string): LabelValue[] {
  let pinyinList = PinyinUtils.getPinyin(text, undefined, true)
  let numberPinyinList = PinyinUtils.getPinyin(text, 'num', true)
  if (text.length > 1) {
    pinyinList = [pinyinList.join(' ')]
    numberPinyinList = [numberPinyinList.join(' ')]
  }
  return numberPinyinList.map((numberPinyin, index) => {
    return {
      label: pinyinList[index],
      value: numberPinyin,
    }
  })
}

async function menuClickHandler() {
  const editor = props.editor
  if (editor) {
    pinyinMenuService.value ??= new PinyinMenuService(editor)
    EditorUtils.trimSelection(editor)
    if (!pinyinMenuService.value.isDisabled()) {
      const text = pinyinMenuService.value.getText()
      if (text) {
        pinyinList.value = getPinyinList(text)
      } else {
        pinyinList.value = []
      }
      if (pinyinList.value.length > 0) {
        show()
      } else {
        throw new Warning('仅支持为中文单词添加拼音');
      }
    }
  }
}

function listItemClickHandler(item: LabelValue) {
  pinyinMenuService.value?.setNode(item.value as string, item.label)
  hide()
}

function ssmlMarkClickHandler(_eventName: string, _editor: BaseEditor, element: BaseElement) {
  if (element.type === PHONEME_TYPE) {
    if ((element as Phoneme).alphabet === Alphabet.PY) {
      pinyinMenuService.value = undefined
      menuClickHandler()
    }
  }
}

watch(() => props.editor, (newValue, oldValue) => {
  oldValue?.off('ssml-mark-click', ssmlMarkClickHandler)
  newValue?.on('ssml-mark-click', ssmlMarkClickHandler)
}, {
  immediate: true
})

onUnmounted(() => {
  props.editor?.off('ssml-mark-click', ssmlMarkClickHandler)
})
</script>

<style scoped>
@reference "tailwindcss";

.se-pinyin {
  li {
    @apply hover:bg-(--color-li-hover-bg) p-2 cursor-pointer rounded-sm list-none
  }

  @apply flex flex-col justify-center p-0 m-0
}
</style>
