import type { BaseEditor, EditorConfig } from '@ssml-editor/vue';

export type SubmitProps = {
  onClick?: (editor?: BaseEditor, config?: EditorConfig) => void;
};
