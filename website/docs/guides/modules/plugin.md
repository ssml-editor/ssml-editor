---
sidebar_position: 4
---

# Plugin

:::tip

- Since changes made within a plugin affect the editor globally, to prevent plugin pollution, the plugin configuration here should be specifically associated with the editor node linked to this module.

:::

During module usage, various methods of the editor’s `BaseEditor` need to be invoked. At the same time, the [module](../../getting-started/configuration#editormodule-attributes)’s logic often requires overriding these `BaseEditor` methods. This can be achieved by configuring the `plugin` method of a module to override `BaseEditor` methods.

For example, the [Attribute](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/module.ts) module configures its `plugin` method to set both `isInline` and `isVoid` properties of the [Attribute](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/module.ts) node to `false`. For details on the [Attribute](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/module.ts) module’s `plugin` implementation, please refer to the [source code](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/cosy-voice/module/speak/plugin.ts) .

For detailed usage of plugins, please refer to [Global Plugin](../plugin).
