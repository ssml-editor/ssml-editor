---
sidebar_position: 4
---

import APITable from '@site/src/components/APITable';
import ExclamationTooltip from '@site/src/components/ExclamationTooltip';
import NoWrapCell from '@site/src/components/NoWrapCell';

# 标准化SSML

某些时候我们需要对生成的SSML结构代码进一步处理或者对代码结构做校验，比如：增加固定的属性或节点、在节点外部增加 `<xml>...</xml>`、检测根节点是否是某个节点等。通过配置 `normalizers` 方法数组来返回处理后的SSML结构字符串数组从而达到以上目的。

## 标准化器类型

标准化器的类型为 `Function` ，接收 `Array<string>` 类型的参数并返回此参数。定义如下：

```ts showLineNumbers title="vue\src\type\editor-normalization.ts"
export type EditorNormalization = (codes: string[]) => string[];
```

## 定义标准化器

<details>

<summary>查看完整示例</summary>

```ts showLineNumbers title="editor-vue\src\cosy-voice\normalizer\speak\speak-normalizer.ts"
import type { EditorNormalization } from '@ssml-editor/vue';

export const SpeakNormalizer: EditorNormalization = (
  codes: string[],
): string[] => {
  for (const code of codes) {
    if (!code.startsWith('<speak')) {
      throw new Error('存在未设置属性的段落');
    }
  }
  return codes;
};
```

</details>

## 使用标准化器

通过配置对象的 `normalizers` 属性传入标准化器：

```ts showLineNumbers title="example\src\config.ts"
import {
  SpeakNormalizer,
  type EditorConfig,
} from '@ssml-editor/editor-vue';

export default <EditorConfig>{
  ...
  normalizers: [SpeakNormalizer],
  ...
};
```
