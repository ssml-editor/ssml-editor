import type { ExtEditor } from '@/model';
import type { BaseEditor } from 'slate-vue3/core';

export const withExt = <T extends BaseEditor>(editor: T): T & ExtEditor => {
  const newEditor = editor as T & ExtEditor;

  newEditor.ext = {};

  return newEditor;
};
