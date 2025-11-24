import { type EditorConfig } from '@/model';
import { StorageType } from '@ssml-editor/core';

export const DefaultEditorConfig: Readonly<EditorConfig> = {
  databaseName: 'default',
  scroll: true,
  readOnly: false,
  autoFocus: false,
  animation: {
    zoom: true,
    grayscale: true,
  },
  html: {
    storageType: StorageType.NONE,
    storeName: 'html',
    reader: () => {
      return Promise.resolve('');
    },
    saver: () => {
      return Promise.resolve(true);
    },
    autoSave: true,
    autoSaveWait: 5000,
  },
  style: {
    minHeight: '18.75rem',
    maxHeight: '34.75rem',
  },
  toolbar: {
    menus: [],
  },
  normalizers: [],
};
