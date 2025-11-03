import { StorageType } from '@/enumeration';
import type { EditorHtmlConfig } from '@/model';
import { EditorStorageService } from './editor-storage-service';

export class EditorService {
  constructor(databaseName?: string, editorHtmlConfig?: EditorHtmlConfig) {
    this._editorHtmlConfig = editorHtmlConfig;
    if (databaseName) {
      if (
        editorHtmlConfig &&
        editorHtmlConfig.storageType === StorageType.LOCAL &&
        editorHtmlConfig.storeName
      ) {
        this._editorStorageService = new EditorStorageService(
          databaseName,
          editorHtmlConfig.storeName,
        );
      }
    }
  }

  private _editorStorageService: EditorStorageService | undefined = undefined;
  private _editorHtmlConfig: EditorHtmlConfig | undefined = undefined;
  private _htmlStoreKey: string = 'html';

  async readHtml(): Promise<string> {
    if (this._editorHtmlConfig) {
      if (this._editorHtmlConfig.storageType === StorageType.LOCAL) {
        return (
          (await this._editorStorageService?.read<string>(
            this._htmlStoreKey,
          )) || ''
        );
      } else if (this._editorHtmlConfig.storageType === StorageType.REMOTE) {
        return (await this._editorHtmlConfig.reader?.()) || '';
      }
    }
    return '';
  }

  async saveHtml(html: string): Promise<boolean> {
    if (this._editorHtmlConfig) {
      if (this._editorHtmlConfig.storageType === StorageType.LOCAL) {
        if (this._editorStorageService) {
          return await this._editorStorageService?.save<string>(
            this._htmlStoreKey,
            html,
          );
        } else {
          return false;
        }
      } else if (this._editorHtmlConfig.storageType === StorageType.REMOTE) {
        return (await this._editorHtmlConfig.saver?.(html)) || false;
      }
    }
    return false;
  }
}
