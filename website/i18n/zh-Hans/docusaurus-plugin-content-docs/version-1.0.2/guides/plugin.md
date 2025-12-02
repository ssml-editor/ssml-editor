---
sidebar_position: 2
---

import APITable from '@site/src/components/APITable';
import ExclamationTooltip from '@site/src/components/ExclamationTooltip';
import NoWrapCell from '@site/src/components/NoWrapCell';

# 插件

:::tip

- 插件在模组的使用中尤为重要

:::

在编辑器使用过程中，编辑器会调用 `BaseEditor` 的各种方法，而插件的引入便是方便开发者重写 `BaseEditor` 的方法从而改写编辑器的默认动作，实现定制化编辑器操作过程。

## 插件类型

插件的类型为 `Function` ，接收继承自 `BaseEditor` 类型的参数并返回此参数。定义如下：

```ts showLineNumbers title="vue\src\type\editor-plugin.ts"
import type { BaseEditor } from './base-editor';

export type EditorPlugin = <T extends BaseEditor>(editor: T) => T;
```

## 定义插件

<details>

<summary>查看完整示例</summary>

```ts showLineNumbers title="editor-vue\src\common\plugin\void-element\void-element-plugin.ts"
import { type BaseEditor, type EditorPlugin } from '@ssml-editor/vue';
import { Element, Node } from 'slate-vue3/core';

export const voidElementPlugin: EditorPlugin = <T extends BaseEditor>(
  editor: T,
): T => {
  const { insertNode } = editor;
  const newEditor = editor;

  /**
   * 重写 insertNode 方法，在 void 元素被插入后移动光标至新插入的元素后。
   */
  newEditor.insertNode = (node: Node) => {
    insertNode(node);
    if (Element.isElement(node) && newEditor.isVoid(node)) {
      newEditor.move({ distance: 1 });
    }
  };

  return newEditor;
};
```

</details>

## 使用插件

通过 [配置](https://github.com/ssml-editor/ssml-editor/blob/master/example/src/config.ts) 对象的 `plugins` 属性传入插件：

```ts showLineNumbers title="example\src\config.ts"
import {
  voidElementPlugin,
  type EditorConfig,
} from '@ssml-editor/editor-vue';

export default <EditorConfig>{
  ...
  plugins: [voidElementPlugin],
  ...
};
```
