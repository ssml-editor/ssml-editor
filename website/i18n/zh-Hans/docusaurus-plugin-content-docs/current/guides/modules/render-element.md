---
sidebar_position: 1
---

import Image from '@theme/IdealImage';
import RenderElementImageUrl from '@site/static/img/module-1.png';
import ZoomableImage from '@site/src/components/ZoomableImage';

# 渲染节点数据

节点数据需要通过HTML结构在编辑器内容区域呈现出来，而 [模组](../../getting-started/configuration#editormodule-attributes) 的 `renderElement` 方法正是通过返回 `VNode` 从而插入到编辑器内容区域来做到呈现节点数据。

例如，[属性](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/module.ts) 模组通过配置 `renderElement` 方法把节点数据在编辑器内容区域渲染为如下图所示的HTML结构。[属性](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/module.ts) 模组的 `renderElement` 方法详情请参考 [源码](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/render-element.ts) 。

<ZoomableImage src={RenderElementImageUrl.src.src}>
<Image img={RenderElementImageUrl} />
</ZoomableImage>
