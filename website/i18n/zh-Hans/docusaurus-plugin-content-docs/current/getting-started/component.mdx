---
sidebar_position: 5
---

import APITable from '@site/src/components/APITable';
import ExclamationTooltip from '@site/src/components/ExclamationTooltip';
import NoWrapCell from '@site/src/components/NoWrapCell';

# 组件

在本节中，我们将系统地介绍编辑器组件的基础用法，并详细说明各类事件的触发机制。通过本节内容，您将掌握如何正确初始化编辑器、与其进行交互，并响应关键操作事件，为后续的深度定制打下坚实基础。

## 基础用法

<details>

<summary>查看完整示例</summary>

```ts showLineNumbers
<template>
  <Editor :config="config"></Editor>
</template>

<script setup lang="ts">
import '@ssml-editor/editor-vue/styles/highlight/github-dark-dimmed.css';
import '@ssml-editor/editor-vue/styles/style.css';
import { StorageType } from '@ssml-editor/core';
import {
  CodeMenu,
  CopyMenu,
  ExportMenu,
  SaveMenu,
  SubmitMenu,
  type SubmitProps
} from '@ssml-editor/editor-vue';
import {
  Editor, RowContainerAlign, type BaseEditor,
  type EditorConfig
} from '@ssml-editor/vue';

const config = <EditorConfig>{
  placeholder: 'Please enter content...',
  animation: { grayscale: true, zoom: true },
  html: {
    storageType: StorageType.LOCAL,
  },
  toolbar: {
    menus: [
      {
        component: SaveMenu,
      },
      {
        component: ExportMenu,
      },
      {
        component: CopyMenu,
      },
      {
        component: CodeMenu,
      },
    ],
    align: RowContainerAlign.CENTER,
  },
  footer: {
    menus: [
      {
        component: SubmitMenu,
        props: <SubmitProps>{
          onClick: (
            code: string,
            editor?: BaseEditor,
            config?: EditorConfig,
          ) => {
            console.log('onClick', code, editor, config);
          },
        },
      },
    ],
    align: RowContainerAlign.END,
    style: {
      marginTop: 'calc(var(--spacing, .25rem) * 2)',
    },
  },
};
</script>
```

</details>

## 事件用法

<details>

<summary>查看完整示例</summary>

```ts showLineNumbers
<template>
  <Editor @created="createdHandler" @change="changeHandler" @selection-change="selectionChangeHandler"
    @value-change="valueChangeHandler" @destroyed="destroyedHandler" @focus="focusHandler" @blur="blurHandler"
    @max-length="maxLengthHandler" @warning="warningHandler" @error="errorHandler"></Editor>
</template>

<script setup lang="ts">
import type { Warning } from '@ssml-editor/base';
import { type BaseEditor, Editor } from '@ssml-editor/vue';
import type { Operation } from 'slate-vue3/core';

function createdHandler(
  editor: BaseEditor,
  htmlElement: HTMLDivElement | null,
) {
  console.log('createdHandler', editor, htmlElement);
}

function changeHandler(
  editor: BaseEditor,
  htmlElement: HTMLDivElement | null,
  options?: { operation?: Operation },
) {
  console.log('changeHandler', editor, htmlElement, options);
}

function selectionChangeHandler(
  editor: BaseEditor,
  htmlElement: HTMLDivElement | null,
  options?: { operation?: Operation },
) {
  console.log('selectionChangeHandler', editor, htmlElement, options);
}

function valueChangeHandler(
  editor: BaseEditor,
  htmlElement: HTMLDivElement | null,
  options?: { operation?: Operation },
) {
  console.log('valueChangeHandler', editor, htmlElement, options);
}

function destroyedHandler(
  editor: BaseEditor,
  htmlElement: HTMLDivElement | null,
) {
  console.log('destroyedHandler', editor, htmlElement);
}

function focusHandler(editor: BaseEditor, htmlElement: HTMLDivElement | null) {
  console.log('focusHandler', editor, htmlElement);
}

function blurHandler(editor: BaseEditor, htmlElement: HTMLDivElement | null) {
  console.log('blurHandler', editor, htmlElement);
}

function maxLengthHandler(
  editor: BaseEditor,
  htmlElement: HTMLDivElement | null,
) {
  console.log('maxLengthHandler', editor, htmlElement);
}

function warningHandler(warning: Warning) {
  console.log('warningHandler', warning.message);
}

function errorHandler(error: Error) {
  console.log('errorHandler', error.message);
}
</script>
```

</details>

## Editor Api

### Editor Attributes

```mdx-code-block
<APITable>
```

| 属性名 | 说明                                                                  | 类型           | 默认值 |
| ------ | --------------------------------------------------------------------- | -------------- | ------ |
| config | 编辑器详细配置，配置的详尽选项请查看 **[配置](./configuration)** 篇。 | `EditorConfig` | -      |

```mdx-code-block
</APITable>
```

### Editor Events

```mdx-code-block
<APITable>
```

| 事件名          | 说明                                                                                                 | 类型                                                                                                                                                                                                     |
| --------------- | ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| created         | 当编辑器创建成功并挂载完成后触发。                                                                   | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`({ editor: BaseEditor, htmlElement: HTMLDivElement \| null }) => void`</ExclamationTooltip></NoWrapCell>                                      |
| change          | 当编辑器发生改变后触发。<br />（包含选区改变和内容改变）                                             | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`({ editor: BaseEditor, htmlElement: HTMLDivElement \| null, options?: { operation?: Operation } }) => void`</ExclamationTooltip></NoWrapCell> |
| selectionChange | 当编辑器选区改变后触发。                                                                             | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`({ editor: BaseEditor, htmlElement: HTMLDivElement \| null, options?: { operation?: Operation } }) => void`</ExclamationTooltip></NoWrapCell> |
| valueChange     | 当编辑器内容改变后触发。                                                                             | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`({ editor: BaseEditor, htmlElement: HTMLDivElement \| null, options?: { operation?: Operation } }) => void`</ExclamationTooltip></NoWrapCell> |
| destroyed       | 当编辑器卸载并销毁后触发。                                                                           | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`({ editor: BaseEditor, htmlElement: HTMLDivElement \| null }) => void`</ExclamationTooltip></NoWrapCell>                                      |
| focus           | 当编辑器获取焦点后触发。                                                                             | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`({ editor: BaseEditor, htmlElement: HTMLDivElement \| null }) => void`</ExclamationTooltip></NoWrapCell>                                      |
| blur            | 当编辑器失去焦点后触发。                                                                             | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`({ editor: BaseEditor, htmlElement: HTMLDivElement \| null }) => void`</ExclamationTooltip></NoWrapCell>                                      |
| maxLength       | 当编辑器输入的文字长度到达设置的最大值后触发。<br />（此事件触发依赖配置中 `config.maxLength` 属性） | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`({ editor: BaseEditor, htmlElement: HTMLDivElement \| null }) => void`</ExclamationTooltip></NoWrapCell>                                      |
| error           | 当编辑器抛出异常后触发。                                                                             | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`({ error: Error }) => void`</ExclamationTooltip></NoWrapCell>                                                                                 |
| warning         | 当编辑器抛出 Warning 时触发。                                                                        | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`({ warning: Warning }) => void`</ExclamationTooltip></NoWrapCell>                                                                             |

```mdx-code-block
</APITable>
```
