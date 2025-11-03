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
    minHeight: '300px',
    maxHeight: '500px',
  },
  toolbar: {
    menus: [],
  },
  normalizers: [],
};
