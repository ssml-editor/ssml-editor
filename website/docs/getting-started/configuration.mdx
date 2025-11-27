---
sidebar_position: 3
---

import APITable from '@site/src/components/APITable';
import ExclamationTooltip from '@site/src/components/ExclamationTooltip';
import NoWrapCell from '@site/src/components/NoWrapCell';

# Configuration

This section provides a comprehensive overview of the detailed configuration object `config` for the editor component. This configuration object encompasses all customizable properties of the editor, forming the core foundation for personalized editing experiences. By flexibly adjusting `config`, you can precisely shape the editor's behavior and appearance to meet diverse usage requirements.

## EditorConfig Attributes

```mdx-code-block
<APITable>
```

| Property     | Description                                                                                                                                                                                                                                                                                                                  | Type                                                                                                                                            | Default |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| databaseName | Database name used when storing editor content in IndexedDB.                                                                                                                                                                                                                                                                 | `string`                                                                                                                                        | default |
| scroll       | Whether the editor content allows scrolling via scrollbar.<br />Set to `false`: No scrollbar appears; editor height increases as content grows.<br />Set to `true`: Fixed editor height; scrollbar appears when content exceeds editor height. Requires setting `style.height` or `style.maxHeight` (must not be undefined). | `boolean`                                                                                                                                       | true    |
| placeholder  | Placeholder text displayed when editor content is empty.                                                                                                                                                                                                                                                                     | `string`                                                                                                                                        | -       |
| readOnly     | Whether the editor is read-only.<br />Set to `true` to disable editing; otherwise, editing is allowed.                                                                                                                                                                                                                       | `boolean`                                                                                                                                       | false   |
| autoFocus    | Whether the editor automatically gains focus after creation and mounting.<br />Set to `true` to auto-focus on mount; otherwise, focus requires user interaction.                                                                                                                                                             | `boolean`                                                                                                                                       | false   |
| maxLength    | Maximum allowed input length for editor content.<br />Input continues beyond max length but triggers `maxLength` event.                                                                                                                                                                                                      | `number`                                                                                                                                        | -       |
| animation    | Animation configuration for editor interactions. See **[here](#editoranimationconfig-attributes)** for detailed properties.                                                                                                                                                                                                  | `EditorAnimationConfig`                                                                                                                         | -       |
| html         | Configuration for editor content display and storage. See **[here](#editorhtmlconfig-attributes)** for detailed properties.                                                                                                                                                                                                  | `EditorHtmlConfig`                                                                                                                              | -       |
| style        | Styling configuration for the editor. See **[here](#editorstyleconfig-attributes)** for detailed properties.                                                                                                                                                                                                                 | `EditorStyleConfig`                                                                                                                             | -       |
| toolbar      | Toolbar configuration. See **[here](#editortoolbarconfig-attributes)** for detailed properties.                                                                                                                                                                                                                              | `EditorToolbarConfig`                                                                                                                           | -       |
| footer       | Footer configuration. See **[here](#editorfooterconfig-attributes)** for detailed properties.                                                                                                                                                                                                                                | `EditorFooterConfig`                                                                                                                            | -       |
| plugins      | Global plugin configuration for the editor.                                                                                                                                                                                                                                                                                  | <NoWrapCell inline={false}>`Array<Function>` <ExclamationTooltip>`[(editor: BaseEditor) => BaseEditor]`</ExclamationTooltip></NoWrapCell>       | -       |
| modules      | Editor module configuration. See **[here](#editormodule-attributes)** for detailed properties.                                                                                                                                                                                                                               | `Array<EditorModule>`                                                                                                                           | -       |
| normalizers  | Methods used for normalizing SSML code during editor processing.                                                                                                                                                                                                                                                             | <NoWrapCell inline={false}>`Array<EditorNormalization>` <ExclamationTooltip>`[(codes: string[]) => string[]]`</ExclamationTooltip></NoWrapCell> | -       |

```mdx-code-block
</APITable>
```

## EditorAnimationConfig Attributes

```mdx-code-block
<APITable>
```

| Property  | Description                                                                                                                       | Type      | Default |
| --------- | --------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| zoom      | Whether to apply zoom effect to mark elements when they receive `hover` events.                                                   | `boolean` | true    |
| grayscale | Whether to reduce opacity of other nodes (excluding the hovered mark element's node) when a mark element receives `hover` events. | `boolean` | true    |

```mdx-code-block
</APITable>
```

## EditorHtmlConfig Attributes

```mdx-code-block
<APITable>
```

| Property     | Description                                                                                                      | Type                                                                                                                                                         | Default               |
| ------------ | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------- |
| storageType  | Editor content storage type.                                                                                     | <NoWrapCell inline={false}>`StorageType` <ExclamationTooltip>`StorageType.NONE \| StorageType.LOCAL \| StorageType.REMOTE`</ExclamationTooltip></NoWrapCell> | StorageType.NONE      |
| storeName    | Database name used when storing editor content in local IndexedDB (local storage).                               | `string`                                                                                                                                                     | html                  |
| autoSave     | Whether to enable automatic content saving.                                                                      | `boolean`                                                                                                                                                    | true                  |
| autoSaveWait | Automatic save interval (in ms) when content changes.<br />(triggers via throttling after content modification). | `number`                                                                                                                                                     | 5000                  |
| reader       | Method to retrieve content from external storage.                                                                | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`() => Promise<string>`</ExclamationTooltip></NoWrapCell>                                          | Promise.resolve('')   |
| saver        | Method to save content to external storage.                                                                      | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`(html: string) => Promise<boolean>`</ExclamationTooltip></NoWrapCell>                             | Promise.resolve(true) |

```mdx-code-block
</APITable>
```

## EditorStyleConfig Attributes

```mdx-code-block
<APITable>
```

| Property  | Description           | Type     | Default          |
| --------- | --------------------- | -------- | ---------------- |
| height    | Editor height         | `string` | -                |
| minHeight | Minimum editor height | `string` | 18.75rem (300px) |
| maxHeight | Maximum editor height | `string` | 34.75rem (556px) |

```mdx-code-block
</APITable>
```

## EditorToolbarConfig Attributes

```mdx-code-block
<APITable>
```

| Property | Description                                                                                         | Type                                                                                                                                                                                                                                                                     | Default                  |
| -------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| menus    | Toolbar button configuration. See **[here](#editormenuconfig-attributes)** for detailed properties. | `Array<EditorMenuConfig<Component>>`                                                                                                                                                                                                                                     | []                       |
| align    | Alignment method for toolbar buttons.                                                               | <NoWrapCell inline={false}>`RowContainerAlign` <ExclamationTooltip>`RowContainerAlign.START \| RowContainerAlign.END \| RowContainerAlign.CENTER \| RowContainerAlign.BETWEEN \| RowContainerAlign.AROUND \| RowContainerAlign.EVENLY`</ExclamationTooltip></NoWrapCell> | RowContainerAlign.CENTER |
| style    | Styling configuration for the toolbar.                                                              | `StyleValue`                                                                                                                                                                                                                                                             | -                        |

```mdx-code-block
</APITable>
```

## EditorFooterConfig Attributes

```mdx-code-block
<APITable>
```

| Property | Description                                                                                        | Type                                                                                                                                                                                                                                                                     | Default                  |
| -------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| menus    | Footer button configuration. See **[here](#editormenuconfig-attributes)** for detailed properties. | `Array<EditorMenuConfig<Component>>`                                                                                                                                                                                                                                     | []                       |
| align    | Alignment method for footer buttons.                                                               | <NoWrapCell inline={false}>`RowContainerAlign` <ExclamationTooltip>`RowContainerAlign.START \| RowContainerAlign.END \| RowContainerAlign.CENTER \| RowContainerAlign.BETWEEN \| RowContainerAlign.AROUND \| RowContainerAlign.EVENLY`</ExclamationTooltip></NoWrapCell> | RowContainerAlign.CENTER |
| style    | Styling configuration for the footer.                                                              | `StyleValue`                                                                                                                                                                                                                                                             | -                        |

```mdx-code-block
</APITable>
```

## EditorMenuConfig Attributes

```mdx-code-block
<APITable>
```

| Property     | Description                            | Type                  | Default |
| ------------ | -------------------------------------- | --------------------- | ------- |
| \* component | Vue component used for toolbar buttons | `Component`           | -       |
| props        | Props passed to the button component   | `Record<string, any>` | -       |

```mdx-code-block
</APITable>
```

> Note: Parameters marked with `*` are required.

## EditorModule Attributes

```mdx-code-block
<APITable>
```

| Property      | Description                                                                                                                                         | Type                                                                                                                                                 | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| \* type       | Editor node type associated with this module. (Please ensure the uniqueness of this property value; different modules must not use the same value.) | `string`                                                                                                                                             | -       |
| renderElement | Method to render node data in editor area (HTML).                                                                                                | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`(props: RenderElementProps) => VNode`</ExclamationTooltip></NoWrapCell>                   | -       |
| elementToHtml | Method to convert node to HTML.                                                                                                                     | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`(props: EditorElementToHtmlMethodProps) => string`</ExclamationTooltip></NoWrapCell>      | -       |
| htmlToElement | Method to convert HTML to node.                                                                                                                     | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`(props: EditorHtmlToElementMethodProps) => BaseElement`</ExclamationTooltip></NoWrapCell> | -       |
| plugin        | Plugin configuration (must relate to this module's editor node).                                                                                    | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`(editor: BaseEditor) => BaseEditor`</ExclamationTooltip></NoWrapCell>                     | -       |
| serializer    | Method to convert node to SSML.                                                                                                                     | <NoWrapCell inline={false}>`Function` <ExclamationTooltip>`(node: BaseElement, children?: string) => string`</ExclamationTooltip></NoWrapCell>       | -       |

```mdx-code-block
</APITable>
```

> Note: Parameters marked with `*` are required.
