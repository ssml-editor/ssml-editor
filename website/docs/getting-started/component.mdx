---
sidebar_position: 5
---

import APITable from '@site/src/components/APITable';
import ExclamationTooltip from '@site/src/components/ExclamationTooltip';
import NoWrapCell from '@site/src/components/NoWrapCell';

# Component

In this section, we systematically introduce the fundamental usage of the editor component and provide detailed explanations of event triggering mechanisms. By mastering the content in this section, you will learn how to properly initialize the editor, interact with it, and respond to key operation events, laying a solid foundation for subsequent deep customization.

## Fundamental Usage

<details>

<summary>View the full example</summary>

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

## Event Handling

<details>

<summary>View the full example</summary>

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

| Property | Description                                                                                                             | Type           | Default |
| -------- | ----------------------------------------------------------------------------------------------------------------------- | -------------- | ------- |
| config   | Editor configuration details. For detailed configuration options, see the **[Configuration](./configuration)** section. | `EditorConfig` | -       |

```mdx-code-block
</APITable>
```

### Editor Events

```mdx-code-block
<APITable>
```

| Event           | Description                                                                                                                      | Type                                                                                                                                                                                                     |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| created         | Triggered when the editor is successfully created and mounted.                                                                   | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`({ editor: BaseEditor, htmlElement: HTMLDivElement \| null }) => void`</ExclamationTooltip></NoWrapCell>                                      |
| change          | Triggered after any editor modification occurs.<br />(Includes both selection and content changes)                               | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`({ editor: BaseEditor, htmlElement: HTMLDivElement \| null, options?: { operation?: Operation } }) => void`</ExclamationTooltip></NoWrapCell> |
| selectionChange | Triggered when the editor selection changes.                                                                                     | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`({ editor: BaseEditor, htmlElement: HTMLDivElement \| null, options?: { operation?: Operation } }) => void`</ExclamationTooltip></NoWrapCell> |
| valueChange     | Triggered after the editor content changes.                                                                                      | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`({ editor: BaseEditor, htmlElement: HTMLDivElement \| null, options?: { operation?: Operation } }) => void`</ExclamationTooltip></NoWrapCell> |
| destroyed       | Triggered when the editor is unmounted and destroyed.                                                                            | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`({ editor: BaseEditor, htmlElement: HTMLDivElement \| null }) => void`</ExclamationTooltip></NoWrapCell>                                      |
| focus           | Triggered when the editor gains focus.                                                                                           | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`({ editor: BaseEditor, htmlElement: HTMLDivElement \| null }) => void`</ExclamationTooltip></NoWrapCell>                                      |
| blur            | Triggered when the editor loses focus.                                                                                           | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`({ editor: BaseEditor, htmlElement: HTMLDivElement \| null }) => void`</ExclamationTooltip></NoWrapCell>                                      |
| maxLength       | Triggered when the input text length reaches the configured maximum value.<br />(Depends on `config.maxLength` in configuration) | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`({ editor: BaseEditor, htmlElement: HTMLDivElement \| null }) => void`</ExclamationTooltip></NoWrapCell>                                      |
| error           | Triggered when the editor throws an exception.                                                                                   | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`({ error: Error }) => void`</ExclamationTooltip></NoWrapCell>                                                                                 |
| warning         | Triggered when the editor throws a warning.                                                                                      | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`({ warning: Warning }) => void`</ExclamationTooltip></NoWrapCell>                                                                             |

```mdx-code-block
</APITable>
```
