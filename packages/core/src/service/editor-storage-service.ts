import { Storage } from '@ssml-editor/modules';

export class EditorStorageService {
  constructor(databaseName?: string, storeName?: string) {
    if (databaseName) {
      const name = `${EditorStorageService.DATABASE_NAME_PREFIX}_${databaseName}`;
      this._storager = new Storage({
        name: name,
        storeName: storeName || EditorStorageService.STORE_NAME,
      });
    }
  }

  private _storager: Storage | undefined = undefined;

  async read<T>(key: string): Promise<T | undefined> {
    return (await this._storager?.getItem<T>(key)) || undefined;
  }

  async save<T>(key: string, data: T): Promise<boolean> {
    if (this._storager) {
      const result = await this._storager?.setItem<T>(key, data);
      if (result === data) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  async remove(key: string): Promise<void> {
    return await this._storager?.removeItem(key);
  }

  static DATABASE_NAME_PREFIX = 'ssml_editor';
  static STORE_NAME = 'editor';
}
