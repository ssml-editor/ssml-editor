---
sidebar_position: 6
---

# Footer

The footer bar can be additionally configured with functional elements related to editor operations. For example: [Submit Button](https://github.com/ssml-editor/ssml-editor/blob/master/packages/editor-vue/src/common/footer-menu/submit/submit-menu.vue) .

## Create Element

<details>

<summary>View the full example</summary>

```ts showLineNumbers title="ssml-editor\src\common\footer-menu\submit\submit-menu.vue"
<template>
  <el-button type="primary" @click="submitHandler">提交</el-button>
</template>

<script setup lang="ts">
import { type BaseEditor, type EditorConfig } from '@ssml-editor/vue';
import { ElButton } from 'element-plus';
import type { SubmitProps } from './type';

const { editor, config, onClick } = defineProps<
  SubmitProps & { editor?: BaseEditor; config?: EditorConfig }
>();

async function submitHandler() {
  if (editor) {
    const code = editor.serializeAndNormalize().join('');
    onClick && onClick(code, editor, config);
  }
}
</script>
```

</details>

## Use Elements

Pass footer via the `footer` property in the [configuration](https://github.com/ssml-editor/ssml-editor/blob/master/example/src/config.ts) object:

```ts showLineNumbers title="example\src\config.ts"
import {
  SubmitMenu,
  RowContainerAlign,
  VoiceMenuService,
  type BaseEditor,
  type EditorConfig,
  type SubmitProps,
} from '@ssml-editor/editor-vue';

export default <EditorConfig>{
  ...
  footer: {
    menus: [
      {
        component: SubmitMenu,
        props: <SubmitProps>{
          onClick: async (
            code: string,
            editor?: BaseEditor,
            config?: EditorConfig,
          ) => {
            console.log('SubmitMenuOnClick', code, editor, config);
            if (editor && config) {
              const voiceMenuService = new VoiceMenuService(editor, config);
              const voiceData = await voiceMenuService.readConfig();
              console.log('SubmitMenuOnClick', voiceData);
            }
          },
        },
      },
    ],
    align: RowContainerAlign.END,
    style: {
      marginTop: 'calc(var(--spacing, .25rem) * 2)',
    },
  },
  ...
};
```
