---
sidebar_position: 1
---

# Installation Guide

## Local Installation of SSML Editor for Vue3

:::info Prerequisites

- Familiarity with the command line.

- Install [Node.js](https://nodejs.org/en/download/) version `^20.19.0 || >=22.12.0`.
  - During Node.js installation, ensure all dependency-related options are selected.

- Create a Vue3 project (detailed tutorial: [Vue3 Quick Start](https://cn.vuejs.org/guide/quick-start.html)).

:::

This section guides you through installing the Vue3-based SSML Editor locally.

If you require the built-in toolbar, plugins, bottom bar, or conversion modules needed for Alibaba Cloud CosyVoice SSML syntax, please refer to the Standard Installation. For support of other voice models requiring custom SSML conversion features, use the Minimal Installation and implement the necessary modules, toolbar, and plugins yourself.

### Standard Installation

:::info Standard Installation

- Built-in universal toolbar, plugins, bottom bar, and conversion modules, toolbars, plugins, and standardizers required for SSML syntax supported by Alibaba Cloud CosyVoice.

- Depends on **Element Plus**. If not installed, please install it manually. For detailed tutorials, please visit the official website ([https://element-plus.org/en-US/guide/installation](https://element-plus.org/en-US/guide/installation)).

:::

Run the installation command:

```bash npm2yarn
npm install @ssml-editor/editor-vue --save
```

### Minimal Installation

:::info Minimal Installation

- No built-in features, a blank editor requiring you to implement modules, toolbars, plugins, etc. yourself.

- No need to install Element Plus.

:::

Run the installation command:

```bash npm2yarn
npm install @ssml-editor/vue --save
```

### Using the Component

:::info Using the Component

The following code demonstrates the standard installation method.

:::

Insert the following code on the page where you want to use the SSML Editor component:

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
