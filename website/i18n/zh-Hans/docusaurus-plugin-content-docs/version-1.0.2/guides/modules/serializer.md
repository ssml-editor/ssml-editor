---
sidebar_position: 5
---

import Image from '@theme/IdealImage';
import GenerateSSMLImageUrl from '@site/static/img/module-4.png';
import ZoomableImage from '@site/src/components/ZoomableImage';

# 生成SSML

要转换节点数据为SSML结构，需要通过配置 [模组](../../getting-started/configuration#editormodule-attributes) 的 `serializer` 方法来返回SSML结构的字符串从而达到转换。

例如，[属性](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/module.ts) 模组通过配置 `serializer` 方法把节点转换为如下图所示的SSML结构。[属性](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/module.ts) 模组的 `serializer` 方法详情请参考 [源码](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/serializer.ts) 。

<ZoomableImage src={GenerateSSMLImageUrl.src.src}>
<Image img={GenerateSSMLImageUrl} />
</ZoomableImage>
