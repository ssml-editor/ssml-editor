---
sidebar_position: 1
---

import Image from '@theme/IdealImage';
import RenderElementImageUrl from '@site/static/img/module-1.png';
import ZoomableImage from '@site/src/components/ZoomableImage';

# Render Node Data

Node data must be presented in the editor's content area as HTML structures. The `renderElement` method of a [module](../../getting-started/configuration#editormodule-attributes) achieves this by returning a `VNode`, which is then inserted into the editor’s content area to display the node data.

For example, the [Attribute](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/module.ts) module configures its `renderElement` method to render node data in the editor’s content area as the HTML structure shown below. For details on the [Attribute](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/module.ts) module’s `renderElement` implementation, please refer to the [source code](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/render-element.ts) .

<ZoomableImage src={RenderElementImageUrl.src.src}>
<Image img={RenderElementImageUrl} />
</ZoomableImage>
