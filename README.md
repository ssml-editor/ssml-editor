<p align="center">
  <img width="390" alt="ssml-editor" src="./website/static/img/logo-sslm-editor.svg" />
</p>

<p align="center">
  <a href="https://npmjs.com/package/@ssml-editor/vue">
    <img src="https://img.shields.io/npm/v/@ssml-editor/vue.svg?maxAge=3600&label=npm">
  </a>
</p>

English | [简体中文](./README.zh-CN.md)

## Introduction

SSML Editor is an intelligent text editor designed specifically for speech synthesis technology, transforming the complex creation of SSML (Speech Synthesis Markup Language) markup into intuitive and efficient daily operations. With a simple interface and smart features, users without programming background can easily edit text, automatically generate accurate SSML code, precisely control details such as speech speed, pitch, pauses, and emotional expression, thereby significantly enhancing the naturalness and professionalism of speech synthesis.

SSML Editor is written in TypeScript, with the core implemented based on [Vue3](https://vuejs.org/) and [slate-vue3](https://github.com/Guan-Erjia/slate-vue3), and the UI layer for the built-in conversion module implemented based on [Element Plus](https://github.com/element-plus/element-plus). Ensure that [Vue3](https://vuejs.org/) and [Element Plus](https://github.com/element-plus/element-plus) are included in your project before use.

The current version of SSML Editor includes built-in conversion modules, toolbars, plugins, and standardizers required for SSML syntax supported by Alibaba Cloud CosyVoice.

- [Preview](https://www.ssmleditor.com/example/)

- [Documentation](https://www.ssmleditor.com/docs/next/introduction)

## Getting Started

### Standard Installation

- Built-in universal toolbar, plugins, bottom bar, and conversion modules, toolbars, plugins, and standardizers required for SSML syntax supported by Alibaba Cloud CosyVoice.

- Depends on **Element Plus**. If not installed, please install it manually. For detailed tutorials, please visit the official website ([https://element-plus.org/en-US/guide/installation](https://element-plus.org/en-US/guide/installation)).

Run the installation command:

```bash
npm install @ssml-editor/editor-vue --save
```

### Minimal Installation

- No built-in features, a blank editor requiring you to implement modules, toolbars, plugins, etc. yourself.

- No need to install Element Plus.

Run the installation command:

```bash
npm install @ssml-editor/vue --save
```

### Using the Component

The following code demonstrates the standard installation method.

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

## License

SSML Editor is open source software licensed as [MIT](https://github.com/ssml-editor/ssml-editor/blob/master/LICENSE).
