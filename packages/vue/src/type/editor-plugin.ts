import type { BaseEditor } from './base-editor';

export type EditorPlugin = <T extends BaseEditor>(editor: T) => T;
