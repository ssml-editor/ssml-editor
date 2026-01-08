import type { TextEditor } from '@/model';
import { EditorUtils } from '@/util';
import type { BaseEditor } from 'slate-vue3/core';

export const withText = <T extends BaseEditor>(editor: T): T & TextEditor => {
  const newEditor = editor as T & TextEditor;

  newEditor.getText = (): string => {
    return EditorUtils.getText(newEditor, []);
  };

  return newEditor;
};
