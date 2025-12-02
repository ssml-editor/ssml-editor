---
sidebar_position: 4
---

import APITable from '@site/src/components/APITable';
import ExclamationTooltip from '@site/src/components/ExclamationTooltip';
import NoWrapCell from '@site/src/components/NoWrapCell';

# Normalize SSML

Sometimes we need to further process the generated SSML structure or validate its syntax—for example, adding fixed attributes or nodes, wrapping the content with `<xml>...</xml>`, or checking whether the root node is a specific element. To achieve this, configure an array of `normalizers` functions that return the processed SSML structure as an array of strings.

## Normalizer Type

A normalizer is a `Function` that takes an instance inheriting from `Array<string>` as its argument and returns the same instance. Its definition is as follows:

```ts showLineNumbers title="vue\src\type\editor-normalization.ts"
export type EditorNormalization = (codes: string[]) => string[];
```

## Define Normalizer

<details>

<summary>View the full example</summary>

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

## Use Normalizers

Pass normalizers via the `normalizers` property in the [configuration](https://github.com/ssml-editor/ssml-editor/blob/master/example/src/config.ts) object:

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
