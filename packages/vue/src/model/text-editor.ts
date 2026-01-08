import type { BaseEditor } from 'slate-vue3/core';

export interface TextEditor extends BaseEditor {
  getText(): string;
}
