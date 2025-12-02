---
sidebar_position: 2
---

import Image from '@theme/IdealImage';
import GenerateHTMLImageUrl from '@site/static/img/module-2.png';
import ZoomableImage from '@site/src/components/ZoomableImage';

# Generate HTML

Node data storage requires the data to be persisted as HTML structures; therefore, nodes must be converted into HTML. This is achieved by configuring the `elementToHtml` method of a [module](../../getting-started/configuration#editormodule-attributes) to return a string representing the corresponding HTML structure.

For example, the [Attribute](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/module.ts) module converts nodes into the HTML structure shown below by configuring its `elementToHtml` method. For details on the [Attribute](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/module.ts) module’s `elementToHtml` implementation, please refer to the [source code](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/element-to-html.ts) .

<ZoomableImage src={GenerateHTMLImageUrl.src.src}>
<Image img={GenerateHTMLImageUrl} />
</ZoomableImage>
