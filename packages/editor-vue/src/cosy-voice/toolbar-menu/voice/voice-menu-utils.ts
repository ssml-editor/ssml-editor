import { EditorStorageService } from '@ssml-editor/core';
import { type BaseEditor } from '@ssml-editor/vue';
import type { VoiceContentDataModel } from './model';
import type { VoiceProps } from './type';
import { VoiceStorageType } from './voice-storage-type.enum';

export const VoiceMenuUtils = {
  getProps(editor: BaseEditor):
    | (Pick<VoiceProps, 'storageType' | 'storeName' | 'reader'> & {
        databaseName: string;
      })
    | undefined {
    return (editor as any).__voiceMenuProps;
  },
  setProps(
    editor: BaseEditor,
    props: Pick<VoiceProps, 'storageType' | 'storeName' | 'reader'> & {
      databaseName: string;
    },
  ) {
    (editor as any).__voiceMenuProps = props;
  },
  async getData(
    editor: BaseEditor,
  ): Promise<VoiceContentDataModel | undefined> {
    const props = this.getProps(editor);
    if (props) {
      const { databaseName, storageType, storeName, reader } = props;
      if (storageType === VoiceStorageType.LOCAL) {
        const editorStorageService = new EditorStorageService(databaseName);
        return storeName
          ? await editorStorageService.read(storeName)
          : undefined;
      } else if (storageType === VoiceStorageType.REMOTE) {
        return await reader?.();
      } else {
        return (editor as any).__voiceMenuData;
      }
    }
  },
  async saveData(
    editor: BaseEditor,
    databaseName: string,
    storageType: VoiceStorageType,
    storeName: string,
    saver: (data: VoiceContentDataModel) => Promise<boolean>,
    data: VoiceContentDataModel,
  ): Promise<boolean> {
    if (storageType === VoiceStorageType.LOCAL) {
      const editorStorageService = new EditorStorageService(databaseName);
      return await editorStorageService.save(storeName, data);
    } else if (storageType === VoiceStorageType.REMOTE) {
      return await saver(data);
    } else {
      (editor as any).__voiceMenuData = data;
      return true;
    }
  },
};
