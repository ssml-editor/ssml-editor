---
sidebar_position: 5
---

# 工具栏

模组的配置做到了编辑器节点的数据转换，而工具栏的配置让用户可以插入或编辑对应模组的节点，从而做到从创建节点到SSML结构生成的全部流程。

工具栏菜单功能与模组功能有关联，但工具栏菜单配置并没有放在模组配置内，原因如下：

- 模组与工具栏菜单对应关系有可能是一对多，即一个模组可能会对应多个工具栏菜单功能。例如：音标与多音字使用的同一个模组 `phoneme` 。
- 某些工具栏菜单并不需要模组功能。例如：撤销、重做、全屏、保存等。

## 创建菜单

以下示例完整代码请参考 [别名菜单](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/toolbar-menu/alias/alias-menu.vue) 。

<details>

<summary>查看完整示例</summary>

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

## 实现操作节点的功能

以下示例完整代码请参考 [别名服务](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/toolbar-menu/alias/alias-menu-service.ts) 。

<details>

<summary>查看完整示例</summary>

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

## 使用菜单

通过 [配置](https://github.com/ssml-editor/ssml-editor/blob/master/example/src/config.ts) 对象的 `toolbar` 属性传入菜单：

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
