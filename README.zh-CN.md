<p align="center">
  <img width="390" alt="ssml-editor" src="./website/static/img/logo-sslm-editor.svg" />
</p>

<p align="center">
  <a href="https://npmjs.com/package/@ssml-editor/vue">
    <img src="https://img.shields.io/npm/v/@ssml-editor/vue.svg?maxAge=3600&label=npm">
  </a>
</p>

简体中文 | [English](./README.md)

## 介绍

SSML Editor 是一款专为语音合成技术设计的智能化文本编辑器，它将复杂的 SSML（Speech Synthesis Markup Language）标记语言创作转化为直观、高效的日常操作。通过简洁的界面与智能功能，用户无需编程基础即可轻松编辑文本，自动生成精准的 SSML 代码，精准控制语音的语速、音调、停顿、情感表达等细节，从而显著提升语音合成的自然度与专业性。

SSML Editor 采用 TS 语言编写，核心基于 [Vue3](https://vuejs.org/) 和 [slate-vue3](https://github.com/Guan-Erjia/slate-vue3) 实现，内置转换模块 UI 层基于 [Element Plus](https://github.com/element-plus/element-plus) 实现。使用前请确保项目中已引入 [Vue3](https://vuejs.org/) 和 [Element Plus](https://github.com/element-plus/element-plus)。

SSML Editor 当前版本内置阿里云 CosyVoice 支持的 SSML 语法所需的转换模块、工具栏、插件、标准化器等。

- [在线预览](https://www.ssmleditor.com/example/)

- [使用文档](https://www.ssmleditor.com/docs/next/introduction)

## 开始

### 标准安装

- 内置通用工具栏、插件、底部栏和阿里云 CosyVoice 支持的 SSML 语法所需的转换模块、工具栏、插件、标准化器等。

- 依赖于 **Element Plus**，如未安装请手动安装，详细教程请转至官网（[https://element-plus.org/zh-CN/guide/installation](https://element-plus.org/zh-CN/guide/installation)）。

运行安装命令：

```bash
npm install @ssml-editor/editor-vue --save
```

### 简洁安装

- 无任何内置，空白的编辑器，需要自行实现模块、工具栏、插件等。

- 无需安装 Element Plus。

运行安装命令：

```bash
npm install @ssml-editor/vue --save
```

### 使用组件

以下代码演示基于标准安装方式

在您要使用 SSML Editor 组件的页面插入以下代码：

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

## 许可证

SSML Editor 是开源软件，采用 [MIT](https://github.com/ssml-editor/ssml-editor/blob/master/LICENSE) 许可。
