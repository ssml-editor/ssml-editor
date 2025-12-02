---
sidebar_position: 5
---

# Toolbar

The module configuration handles data transformation for editor nodes, while the toolbar configuration enables users to insert or edit nodes corresponding to that module—thus covering the entire workflow from node creation to SSML structure generation.

Toolbar menu functionality is related to module functionality, but toolbar menu configuration is not included within the module configuration for the following reasons:

- The relationship between modules and toolbar menus can be one-to-many; that is, a single module may correspond to multiple toolbar menu items. For example, both phonetic transcription and polyphonic characters use the same `phoneme` module.
- Some toolbar menu items do not require any module functionality. Examples include undo, redo, fullscreen, and save.

## Create Menu

For a complete code example, please refer to the [Alias Menu](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/toolbar-menu/alias/alias-menu.vue) .

<details>

<summary>View the full example</summary>

```ts showLineNumbers title="ssml-editor\src\cosy-voice\toolbar-menu\alias\alias-menu.vue"
<template>
  <popover v-model="popoverVisible" :width="200" @submit="submitHandler">
    <template #reference>
      <Button icon-class="iconfont-ssml-editor icon-ssml-editor-bieming" @click="menuClickHandler">别名</Button>
    </template>
    <el-form @submit.prevent="submitHandler">
      <el-input type="text" ref="alias-input" v-model="aliasInputValue"></el-input>
    </el-form>
  </popover>
</template>

<script setup lang="ts">
import { Popover } from '@/component';
import { SUB_TYPE } from '@/cosy-voice';
import {
  type BaseEditor,
  type BaseElement,
  Button,
  EditorUtils,
} from '@ssml-editor/vue';
import { ElForm, ElInput } from 'element-plus';
import { Editor as SlateEditor } from 'slate-vue3/core';
import {
  nextTick,
  onUnmounted,
  ref,
  shallowRef,
  useTemplateRef,
  watch,
} from 'vue';
import { AliasMenuService } from './alias-menu-service';

const props = defineProps<{ editor?: BaseEditor }>();
const popoverVisible = ref(false);
const aliasInputValue = ref('');
const aliasMenuService = shallowRef<AliasMenuService>();
const aliasInputRef = useTemplateRef('alias-input');

function show(callback?: () => void) {
  popoverVisible.value = true;
  callback && nextTick(callback);
}

function hide(callback?: () => void) {
  popoverVisible.value = false;
  callback && nextTick(callback);
}

async function menuClickHandler() {
  const editor = props.editor;
  if (editor) {
    aliasMenuService.value ??= new AliasMenuService(editor);
    EditorUtils.trimSelection(editor);
    if (!aliasMenuService.value.isDisabled()) {
      const data = aliasMenuService.value.getSerializedNode();
      if (data) {
        aliasInputValue.value = data.alias;
      } else {
        aliasInputValue.value = '';
      }
      show(() => {
        aliasInputRef.value?.focus();
      });
    }
  }
}

function submitHandler() {
  const node = aliasMenuService.value?.setNode(aliasInputValue.value);
  hide(() => {
    setTimeout(() => {
      const editor = props.editor;
      if (node && editor) {
        const path = EditorUtils.findPath(editor, node);
        if (path) {
          const point = SlateEditor.end(editor, path);
          editor.select(point);
        }
      }
    });
  });
}

function ssmlMarkClickHandler(
  _eventName: string,
  _editor: BaseEditor,
  elem: BaseElement,
) {
  if (elem.type === SUB_TYPE) {
    aliasMenuService.value = undefined;
    menuClickHandler();
  }
}

watch(
  () => props.editor,
  (newValue, oldValue) => {
    oldValue?.off('ssml-mark-click', ssmlMarkClickHandler);
    newValue?.on('ssml-mark-click', ssmlMarkClickHandler);
  },
  {
    immediate: true,
  },
);

onUnmounted(() => {
  props.editor?.off('ssml-mark-click', ssmlMarkClickHandler);
});
</script>
```

</details>

## Implement functionality for manipulating nodes

For a complete code example, please refer to the [Alias Service](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/toolbar-menu/alias/alias-menu-service.ts) .

<details>

<summary>View the full example</summary>

```ts showLineNumbers title="ssml-editor\src\cosy-voice\toolbar-menu\alias\alias-menu-service.ts"
import { SPEAK_TYPE, SUB_TYPE, type Sub } from '@/cosy-voice';
import { Warning } from '@ssml-editor/base';
import { EditorUtils, MenuBaseService } from '@ssml-editor/vue';
import { Range, type Descendant } from 'slate-vue3/core';

export class AliasMenuService extends MenuBaseService {
  override isDisabled(): boolean {
    if (super.isDisabled()) return true;
    const { selection } = this.editor;
    if (!selection) return true;
    if (Range.isCollapsed(selection)) {
      throw new Warning('请框选要设置别名的文本');
    }
    const speakNode = EditorUtils.findSelectedNodeByType(
      this.editor,
      SPEAK_TYPE,
    );
    if (!speakNode) {
      throw new Warning('只能为已设置了属性的段落中的文本设置别名');
    }
    return false;
  }

  getSerializedNode(): Sub | undefined {
    const node = EditorUtils.findSelectedNodeByType(this.editor, SUB_TYPE);
    if (node) {
      return node as Sub;
    }
  }

  setNode(alias: string): Descendant | null {
    if (!this.isDisabled()) {
      const value = this.getText();
      if (value) {
        const element: Sub = {
          type: SUB_TYPE,
          mark: alias,
          alias: alias,
          children: [{ text: value }],
        };
        const node = EditorUtils.findSelectedNodeByType(this.editor, SUB_TYPE);
        if (node) {
          const partialElement = element as Partial<Sub>;
          delete partialElement.children;
          delete partialElement.type;
          EditorUtils.replaceNode(this.editor, node, partialElement);
          return node;
        } else {
          this.editor.insertNode(element);
          return EditorUtils.findSelectedNodeByType(this.editor, SUB_TYPE);
        }
      }
    }
    return null;
  }
}
```

</details>

## Use Menus

Pass toolbar via the `toolbar` property in the [configuration](https://github.com/ssml-editor/ssml-editor/blob/master/example/src/config.ts) object:

```ts showLineNumbers title="example\src\config.ts"
import {
  AliasMenu,
  RowContainerAlign,
  type EditorConfig,
} from '@ssml-editor/editor-vue';

export default <EditorConfig>{
  ...
  toolbar: {
    menus: [
      ...
      {
        component: AliasMenu,
      },
      ...
    ],
    align: RowContainerAlign.CENTER,
  },
  ...
};
```
