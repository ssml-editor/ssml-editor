---
sidebar_position: 3
---

import APITable from '@site/src/components/APITable';
import ExclamationTooltip from '@site/src/components/ExclamationTooltip';
import NoWrapCell from '@site/src/components/NoWrapCell';

# 配置

在本节中，我们将全面介绍编辑器组件的详细配置对象 `config` 所包含的各项选项。该配置对象汇集了编辑器的所有可定制属性，是实现个性化编辑体验的核心基础。通过灵活调整 `config`，您可以精准地塑造编辑器的行为与外观，以满足多样化的使用需求。

## EditorConfig Attributes

```mdx-code-block
<APITable>
```

| 属性名       | 说明                                                                                                                                                                                                                                                                                         | 类型                                                                                                                                            | 默认值  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| databaseName | 编辑器使用本地 IndexedDB 存储时的数据库名称                                                                                                                                                                                                                                                  | `string`                                                                                                                                        | default |
| scroll       | 编辑器内容是否允许使用滚动条滚动。<br />如果设置为 `false`，编辑器将不会出现滚动条，编辑器高度会随着内容增多而增高。<br />如果设置为 `true`，编辑器将固定高度，内容超过编辑器高度后将会出现滚动条。请同时设置 `style.height` 或 `style.maxHeight` 的值且不能为 `undefined`，否则设置将无效。 | `boolean`                                                                                                                                       | true    |
| placeholder  | 编辑器内容为空时显示的占位文案                                                                                                                                                                                                                                                               | `string`                                                                                                                                        | -       |
| readOnly     | 编辑器是否是只读的。<br />如何设置为 `true`，编辑器将不可编辑，否则允许编辑。                                                                                                                                                                                                                | `boolean`                                                                                                                                       | false   |
| autoFocus    | 编辑器在创建并挂载后是否自动获取焦点。<br />如何设置为 `true`，编辑器将在创建并挂载后自动获取焦点，否则需要用户点击编辑区域后才会获取焦点。                                                                                                                                                  | `boolean`                                                                                                                                       | false   |
| maxLength    | 编辑器输入文字时允许输入的最大长度。<br />到达最大长度后用户依然可以继续输入文字，但是会触发 `maxLength` 事件。                                                                                                                                                                              | `number`                                                                                                                                        | -       |
| animation    | 编辑器交互动画配置。详细配置属性请参考 **[这里](#editoranimationconfig-attributes)**                                                                                                                                                                                                         | `EditorAnimationConfig`                                                                                                                         | -       |
| html         | 编辑器内容的显示和存储相关配置。详细配置属性请参考 **[这里](#editorhtmlconfig-attributes)**                                                                                                                                                                                                  | `EditorHtmlConfig`                                                                                                                              | -       |
| style        | 编辑器样式配置。详细配置属性请参考 **[这里](#editorstyleconfig-attributes)**                                                                                                                                                                                                                 | `EditorStyleConfig`                                                                                                                             | -       |
| toolbar      | 编辑器工具栏配置。详细配置属性请参考 **[这里](#editortoolbarconfig-attributes)**                                                                                                                                                                                                             | `EditorToolbarConfig`                                                                                                                           | -       |
| footer       | 编辑器页脚配置。详细配置属性请参考 **[这里](#editorfooterconfig-attributes)**                                                                                                                                                                                                                | `EditorFooterConfig`                                                                                                                            | -       |
| plugins      | 编辑器全局插件配置                                                                                                                                                                                                                                                                           | <NoWrapCell inline={false}>`Array<Function>` <ExclamationTooltip>`[(editor: BaseEditor) => BaseEditor]`</ExclamationTooltip></NoWrapCell>       | -       |
| modules      | 编辑器模组配置。详细配置属性请参考 **[这里](#editormodule-attributes)**                                                                                                                                                                                                                      | `Array<EditorModule>`                                                                                                                           | -       |
| normalizers  | 编辑器 SSML 代码标准化时使用的方法                                                                                                                                                                                                                                                           | <NoWrapCell inline={false}>`Array<EditorNormalization>` <ExclamationTooltip>`[(codes: string[]) => string[]]`</ExclamationTooltip></NoWrapCell> | -       |

```mdx-code-block
</APITable>
```

## EditorAnimationConfig Attributes

```mdx-code-block
<APITable>
```

| 属性名    | 说明                                                                                          | 类型      | 默认值 |
| --------- | --------------------------------------------------------------------------------------------- | --------- | ------ |
| zoom      | 当编辑器内 mark 元素获取到 `hover` 事件时，是否为此 mark 元素使用放大效果。                   | `boolean` | true   |
| grayscale | 当编辑器内 mark 元素获取到 `hover` 事件时，除此 mark 元素所在的节点，其它节点是否降低透明度。 | `boolean` | true   |

```mdx-code-block
</APITable>
```

## EditorHtmlConfig Attributes

```mdx-code-block
<APITable>
```

| 属性名       | 说明                                                                                                                                          | 类型                                                                                                                                                         | 默认值                |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------- |
| storageType  | 编辑器内容存储类型                                                                                                                            | <NoWrapCell inline={false}>`StorageType` <ExclamationTooltip>`StorageType.NONE \| StorageType.LOCAL \| StorageType.REMOTE`</ExclamationTooltip></NoWrapCell> | StorageType.NONE      |
| storeName    | 编辑器内容使用本地 IndexedDB 存储时的仓库名称                                                                                                 | `string`                                                                                                                                                     | html                  |
| autoSave     | 编辑器内容是否使用自动存储                                                                                                                    | `boolean`                                                                                                                                                    | true                  |
| autoSaveWait | 编辑器内容使用自动存储时触发的自动保存时间间隔。单位 ms。<br />（编辑器内容发生改变后采用节流方式触发自动保存，此属性值作为节流等待的时间。） | `number`                                                                                                                                                     | 5000                  |
| reader       | 编辑器内容使用外部存储时调用的读取内容方法                                                                                                    | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`() => Promise<string>`</ExclamationTooltip></NoWrapCell>                                          | Promise.resolve('')   |
| saver        | 编辑器内容使用外部存储时调用的保存内容方法                                                                                                    | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`(html: string) => Promise<boolean>`</ExclamationTooltip></NoWrapCell>                             | Promise.resolve(true) |

```mdx-code-block
</APITable>
```

## EditorStyleConfig Attributes

```mdx-code-block
<APITable>
```

| 属性名    | 说明           | 类型     | 默认值            |
| --------- | -------------- | -------- | ----------------- |
| height    | 编辑器高度     | `string` | -                 |
| minHeight | 编辑器最小高度 | `string` | 18.75rem（300px） |
| maxHeight | 编辑器最大高度 | `string` | 34.75rem（556px） |

```mdx-code-block
</APITable>
```

## EditorToolbarConfig Attributes

```mdx-code-block
<APITable>
```

| 属性名 | 说明                                                                              | 类型                                                                                                                                                                                                                                                                     | 默认值                   |
| ------ | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| menus  | 编辑器工具栏按钮配置。详细配置属性请参考 **[这里](#editormenuconfig-attributes)** | `Array<EditorMenuConfig<Component>>`                                                                                                                                                                                                                                     | []                       |
| align  | 编辑器工具栏按钮对齐方式                                                          | <NoWrapCell inline={false}>`RowContainerAlign` <ExclamationTooltip>`RowContainerAlign.START \| RowContainerAlign.END \| RowContainerAlign.CENTER \| RowContainerAlign.BETWEEN \| RowContainerAlign.AROUND \| RowContainerAlign.EVENLY`</ExclamationTooltip></NoWrapCell> | RowContainerAlign.CENTER |
| style  | 编辑器工具栏样式配置                                                              | `StyleValue`                                                                                                                                                                                                                                                             | -                        |

```mdx-code-block
</APITable>
```

## EditorFooterConfig Attributes

```mdx-code-block
<APITable>
```

| 属性名 | 说明                                                                            | 类型                                                                                                                                                                                                                                                                     | 默认值                   |
| ------ | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| menus  | 编辑器页脚按钮配置。详细配置属性请参考 **[这里](#editormenuconfig-attributes)** | `Array<EditorMenuConfig<Component>>`                                                                                                                                                                                                                                     | []                       |
| align  | 编辑器页脚按钮对齐方式                                                          | <NoWrapCell inline={false}>`RowContainerAlign` <ExclamationTooltip>`RowContainerAlign.START \| RowContainerAlign.END \| RowContainerAlign.CENTER \| RowContainerAlign.BETWEEN \| RowContainerAlign.AROUND \| RowContainerAlign.EVENLY`</ExclamationTooltip></NoWrapCell> | RowContainerAlign.CENTER |
| style  | 编辑器页脚样式配置                                                              | `StyleValue`                                                                                                                                                                                                                                                             | -                        |

```mdx-code-block
</APITable>
```

## EditorMenuConfig Attributes

```mdx-code-block
<APITable>
```

| 属性名       | 说明                            | 类型                  | 默认值 |
| ------------ | ------------------------------- | --------------------- | ------ |
| \* component | 编辑器工具栏按钮使用的 Vue 组件 | `Component`           | -      |
| props        | 按钮使用的 Vue 组件接收的 props | `Record<string, any>` | -      |

```mdx-code-block
</APITable>
```

> 注：带 `*` 的参数为必填项。

## EditorModule Attributes

```mdx-code-block
<APITable>
```

| 属性名        | 说明                                                                           | 类型                                                                                                                                                 | 默认值 |
| ------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| \* type       | 此模组关联的编辑器节点类型。（请保证此属性值的唯一性，不同模组勿使用相同值。） | `string`                                                                                                                                             | -      |
| renderElement | 此模组关联的编辑器节点数据在编辑器内容区域渲染 HTML 时所使用的方法。           | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`(props: RenderElementProps) => VNode`</ExclamationTooltip></NoWrapCell>                   | -      |
| elementToHtml | 此模组关联的编辑器节点转换为 HTML 时所使用的方法。                             | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`(props: EditorElementToHtmlMethodProps) => string`</ExclamationTooltip></NoWrapCell>      | -      |
| htmlToElement | HTML 转换为此模组关联的编辑器节点时所使用的方法。                              | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`(props: EditorHtmlToElementMethodProps) => BaseElement`</ExclamationTooltip></NoWrapCell> | -      |
| plugin        | 编辑器插件配置。（此处的插件配置应与此模组关联的编辑器节点相关）               | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`(editor: BaseEditor) => BaseEditor`</ExclamationTooltip></NoWrapCell>                     | -      |
| serializer    | 此模组关联的编辑器节点转换为 SSML 时所使用的方法。                             | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`(node: BaseElement, children?: string) => string`</ExclamationTooltip></NoWrapCell>       | -      |

```mdx-code-block
</APITable>
```

> 注：带 `*` 的参数为必填项。
