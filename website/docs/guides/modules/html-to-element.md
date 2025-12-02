---
sidebar_position: 3
---

import Image from '@theme/IdealImage';
import GenerateElementImageUrl from '@site/static/img/module-3.png';
import ZoomableImage from '@site/src/components/ZoomableImage';

# Generate Node

When the editor loads HTML, it needs to convert the HTML structure into editor nodes. This is accomplished by configuring the `htmlToElement` method of a [module](../../getting-started/configuration#editormodule-attributes) to return an element node, thereby achieving the conversion.

For example, the [Attribute](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/module.ts) module converts nodes into the element node shown below by configuring its `htmlToElement` method. For details on the [Attribute](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/module.ts) module’s `htmlToElement` implementation, please refer to the [source code](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/html-to-element.ts) .

<ZoomableImage src={GenerateElementImageUrl.src.src}>
<Image img={GenerateElementImageUrl} />
</ZoomableImage>
