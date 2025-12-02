---
sidebar_position: 2
---

import APITable from '@site/src/components/APITable';
import ExclamationTooltip from '@site/src/components/ExclamationTooltip';
import NoWrapCell from '@site/src/components/NoWrapCell';

# Plugin

:::tip

- Plugins are especially important when working with modules.

:::

During the editor's operation, various methods of `BaseEditor` are invoked. Plugins allow developers to conveniently override these `BaseEditor` methods, thereby customizing the editor’s default behaviors and implementing tailored editing workflows.

## Plugin Type

A plugin is a `Function` that takes an instance inheriting from `BaseEditor` as its argument and returns the same instance. Its definition is as follows:

```ts showLineNumbers title="vue\src\type\editor-plugin.ts"
import type { BaseEditor } from './base-editor';

export type EditorPlugin = <T extends BaseEditor>(editor: T) => T;
```

## Define Plugin

<details>

<summary>View the full example</summary>

```ts showLineNumbers title="editor-vue\src\common\plugin\void-element\void-element-plugin.ts"
import { type BaseEditor, type EditorPlugin } from '@ssml-editor/vue';
import { Element, Node } from 'slate-vue3/core';

export const voidElementPlugin: EditorPlugin = <T extends BaseEditor>(
  editor: T,
): T => {
  const { insertNode } = editor;
  const newEditor = editor;

  /**
   * Override the insertNode method to move the cursor after the newly inserted void element.
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

## Use Plugins

Pass plugins via the `plugins` property in the [configuration](https://github.com/ssml-editor/ssml-editor/blob/master/example/src/config.ts) object:

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
