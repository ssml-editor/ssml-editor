---
sidebar_position: 1
---

import Image from '@theme/IdealImage';
import NodeDataStructureImageUrl from '@site/static/img/node-1.png';
import ZoomableImage from '@site/src/components/ZoomableImage';

# Node Data Structure

SSML Editor is an extension of the Slate Vue3 component, developed based on Slate as its core. Please refer to the official documentation to learn about [Slate Node](https://docs.slatejs.org/concepts/02-nodes) design.

## Quick Start

To quickly understand the data structure of various nodes, please visit the [online example](/example) page. After manipulating the editor content, click the **Submit** button to view the Nodes structure output in the browser console.

For example, write a text segment, insert an sound element, or set a polyphonic word - you can see their data structures by checking console print `editor.children`.

<ZoomableImage src={NodeDataStructureImageUrl.src.src}>
<Image img={NodeDataStructureImageUrl} />
</ZoomableImage>

## Text Node

Text nodes, such as `{ text: 'hello' }`, must contain the `text` property. Custom properties can be added, for example bold text can be represented as `{ text: 'hello', bold: true }`, with other properties extendable as needed.

Note: Text nodes are leaf nodes, so they don't have child nodes or a `children` property.

## Element Node

Element nodes, such as `{ type: 'ssml-phoneme', mark: 'yuè', ph: 'yue4', alphabet: 'py', children: [ { text: '乐' } ] }`, must contain three required properties: type, mark, and children. Custom properties like ph and alphabet can be added as needed.

- The `type` property indicates the element node's type **(ensure uniqueness of this value, avoid using the same value for different node types)**.

- The `mark` property stores the identification content displayed in the tooltip area above the corresponding element in the editor.

- The `children` property stores the element node's child nodes, which can be text nodes or element nodes **(ensure this property always contains at least one node)**.

## Inline Element

Elements are displayed as block by default, occupying a full line. However, we often need to change them to inline display.

We can use [plugins](./plugin) to modify `isInline` to convert elements to inline display. See the break element's [plugin source code](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/break/plugin.ts) for reference.

```ts showLineNumbers title="editor-vue\src\cosy-voice\module\break\plugin.ts"
...
newEditor.isInline = (element: Element) => {
  const type = NodeUtils.getNodeType(element);
  if (type === BREAK_TYPE) return true;
  return isInline(element);
};
...
```

## Void Element

Some elements need to be defined as void type (without child nodes), such as `<break>` and `<soundEvent>` .

We can use [plugins](./plugin) to modify isVoid to convert elements to void type. See the break element's [plugin source code](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/break/plugin.ts) for reference.

```ts showLineNumbers title="editor-vue\src\cosy-voice\module\break\plugin.ts"
...
newEditor.isVoid = (element: Element) => {
    const type = NodeUtils.getNodeType(element);
    if (type === BREAK_TYPE) return true;
    return isVoid(element);
  };
...
```

Note: Although void type elements semantically don't have child nodes, they still need to be defined as element nodes with a `children` property containing a single empty string text node. For example, the break element:

```ts showLineNumbers
{
    type: 'ssml-break',
    mark: '50ms',
    time: '50ms',
    children: [{ text: '' }] // Void elements must have a children property containing exactly one empty string text node, important!!!
}
```

## Built-in Node Structures in editor-vue Package

For detailed node data structures, please directly check the `model` definitions in the source code.

- [Properties](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/model.ts) - Extended element node properties

- [Break](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/break/model.ts) - Defined **inline** **void** extended element node properties

- [Sound](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/sound-event/model.ts) - Defined **inline** **void** extended element node properties

- [Alias](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/sub/model.ts) - Defined **inline** extended element node properties

- [Polyphonic characters and phonetic transcription](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/phoneme/model.ts) - Defined **inline** extended element node properties

- [Say As](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/say-as/model.ts) - Defined **inline** extended element node properties
