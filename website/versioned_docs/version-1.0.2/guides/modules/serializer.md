---
sidebar_position: 5
---

import Image from '@theme/IdealImage';
import GenerateSSMLImageUrl from '@site/static/img/module-4.png';
import ZoomableImage from '@site/src/components/ZoomableImage';

# Generate SSML

To convert node data into an SSML structure, configure the `serializer` method of a [module](../../getting-started/configuration#editormodule-attributes) to return a string representing the SSML structure, thereby achieving the conversion.

For example, the [Attribute](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/module.ts) module converts nodes into the SSML structure shown below by configuring its `serializer` method. For details on the [Attribute](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/module.ts) module’s `serializer` implementation, please refer to the [source code](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/serializer.ts) .

<ZoomableImage src={GenerateSSMLImageUrl.src.src}>
<Image img={GenerateSSMLImageUrl} />
</ZoomableImage>
