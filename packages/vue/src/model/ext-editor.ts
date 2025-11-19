import type { EditorExt } from '@/type';
import type { BaseEditor } from 'slate-vue3/core';

export interface ExtEditor extends BaseEditor {
  ext: EditorExt;
}
