---
sidebar_position: 4
---

# 插件

:::tip

- 因插件内部做出的更改会作用于全局，为避免插件产生污染，此处的插件配置应与此模组关联的编辑器节点相关。

:::

在模组的使用过程中，需要调用编辑器 `BaseEditor` 的各种方法，而模组的逻辑又需要重写 `BaseEditor` 的方法，通过配置 [模组](../../getting-started/configuration#editormodule-attributes) 的 `plugin` 方法可以做到重写 `BaseEditor` 的方法。

例如，[属性](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/module.ts) 模组通过配置 `plugin` 方法把 [属性](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/module.ts) 节点 `isInline` 和 `isVoid` 都设置为 `false`。[属性](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/module.ts) 模组的 `plugin` 方法详情请参考 [源码](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/plugin.ts) 。

详细的插件使用请参考 [全局插件](../plugin) 。
