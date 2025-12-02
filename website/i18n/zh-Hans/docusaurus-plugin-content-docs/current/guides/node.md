---
sidebar_position: 1
---

import Image from '@theme/IdealImage';
import NodeDataStructureImageUrl from '@site/static/img/node-1.png';
import ZoomableImage from '@site/src/components/ZoomableImage';

# 节点数据结构

:::tip

- Slate 中文文档可以参考 [https://github.com/loveloki/slate-docs-cn](https://github.com/loveloki/slate-docs-cn) 项目。

:::

SSML Editor 是扩展自 Slate Vue3 组件，基于 Slate 为内核而开发。请移步官方学习 [Slate Node](https://docs.slatejs.org/concepts/02-nodes) 设计。

## 快速了解

如果想快速了解各个节点的数据结构，请移步 [在线示例](https://www.ssmleditor.com/example/)，操作一下编辑器内容后点击 **提交** 按钮，查看浏览器控制台输出的 Nodes 结构。

例如，写一段文字、插入一段声音、设置一个多音字，控制台打印 `editor.children` 即可看到他们的数据结构。

<ZoomableImage src={NodeDataStructureImageUrl.src.src}>
<Image img={NodeDataStructureImageUrl} />
</ZoomableImage>

## 文本节点

文本节点，例如 `{ text: 'hello' }` 必须有 `text` 属性。还可以自定义属性，例如加粗的文本可表示为 `{ text: 'hello', bold: true }` ，其他属性可自行扩展。

注意，文本节点是底层节点，所以没有子节点，**没有** `children` **属性**。

## 元素节点

元素节点，例如 `{ type: 'ssml-phoneme', mark: 'yuè', ph: 'yue4', alphabet: 'py', children: [ { text: '乐' } ] }` 必须有三个属性 type、mark 和 children 属性。还可以自定义属性，例如 ph、alphabet，其他属性自行扩展。

- `type` 属性表明此元素节点的类型。**（请保证此值的唯一性，不要配置相同值的不同节点。）**

- `mark` 属性存储此元素节点的标识内容，应展示在编辑器内容区对应元素的上部提示区域。

- `children` 属性存储此元素节点的子节点，可以是文本节点和元素节点。**（请保证此属性始终至少有一个节点）**

## 内联元素

元素默认是 block 显示，即占满一整行。但大多数时我们需要把它变为 inline 显示。

我们可以通过 [插件](./plugin) 来修改 `isInline` 把一个元素改为 inline ，参考停顿元素的 [插件源码](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/break/plugin.ts) 。

```ts showLineNumbers title="editor-vue\src\cosy-voice\module\break\plugin.ts"
...
newEditor.isInline = (element: Element) => {
  const type = NodeUtils.getNodeType(element);
  if (type === BREAK_TYPE) return true;
  return isInline(element);
};
...
```

## 空元素

有些元素需要定义为 void 类型（即没有子节点），例如 `<break>` `<soundEvent>` 等。

我们可以通过 [插件](./plugin) 来修改 `isVoid` 把一个元素改为 void ，参考停顿元素的 [插件源码](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/break/plugin.ts) 。

```ts showLineNumbers title="editor-vue\src\cosy-voice\module\break\plugin.ts"
...
newEditor.isVoid = (element: Element) => {
    const type = NodeUtils.getNodeType(element);
    if (type === BREAK_TYPE) return true;
    return isVoid(element);
  };
...
```

注意，void 类型虽然在语义上没有子节点，但它仍是一个元素节点，必须有一个 `children` 属性，其中只有一个空字符串的文本节点。例如停顿元素：

```ts showLineNumbers
{
    type: 'ssml-break',
    mark: '50ms',
    time: '50ms',
    children: [{ text: '' }] // Void 元素必须有一个 children 属性，其中只有一个空字符串的文本节点，重要！！！
}
```

## editor-vue 包内置节点的数据结构

详细的节点数据结构，可以直接查看源码中 `model` 定义。

- [属性](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/model.ts) - 扩展 element node 属性

- [停顿](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/break/model.ts) - 定义 **inline** **void** 扩展 element node 属性

- [声音](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/sound-event/model.ts) - 定义 **inline** **void** 扩展 element node 属性

- [别名](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/sub/model.ts) - 定义 **inline** 扩展 element node 属性

- [多音字和音标](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/phoneme/model.ts) - 定义 **inline** 扩展 element node 属性

- [读法](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/say-as/model.ts) - 定义 **inline** 扩展 element node 属性
