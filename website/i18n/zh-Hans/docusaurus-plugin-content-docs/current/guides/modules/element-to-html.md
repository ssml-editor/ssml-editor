---
sidebar_position: 2
---

import Image from '@theme/IdealImage';
import GenerateHTMLImageUrl from '@site/static/img/module-2.png';
import ZoomableImage from '@site/src/components/ZoomableImage';

# 生成HTML

节点数据存储功能需要以HTML结构进行存储，因此需要把节点转换为HTML，通过配置 [模组](../../getting-started/configuration#editormodule-attributes) 的 `elementToHtml` 方法来返回HTML结构的字符串从而达到转换。

例如，[属性](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/module.ts) 模组通过配置 `elementToHtml` 方法把节点转换为如下图所示的HTML结构。[属性](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/module.ts) 模组的 `elementToHtml` 方法详情请参考 [源码](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/element-to-html.ts) 。

<ZoomableImage src={GenerateHTMLImageUrl.src.src}>
<Image img={GenerateHTMLImageUrl} />
</ZoomableImage>
