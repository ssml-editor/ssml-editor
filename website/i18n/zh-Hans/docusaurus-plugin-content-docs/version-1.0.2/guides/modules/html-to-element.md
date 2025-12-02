---
sidebar_position: 3
---

import Image from '@theme/IdealImage';
import GenerateElementImageUrl from '@site/static/img/module-3.png';
import ZoomableImage from '@site/src/components/ZoomableImage';

# 生成节点

编辑器加载HTML时需要把HTML结构转换为节点，通过配置 [模组](../../getting-started/configuration#editormodule-attributes) 的 `htmlToElement` 方法来返回元素节点从而达到转换。

例如，[属性](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/module.ts) 模组通过配置 `htmlToElement` 方法把HTML结构转换为如下图所示的元素节点。[属性](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/module.ts) 模组的 `htmlToElement` 方法详情请参考 [源码](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/html-to-element.ts) 。

<ZoomableImage src={GenerateElementImageUrl.src.src}>
<Image img={GenerateElementImageUrl} />
</ZoomableImage>
