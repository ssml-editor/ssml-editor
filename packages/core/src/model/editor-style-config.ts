import type { Properties, PropertiesHyphen, Property } from 'csstype';

export interface EditorStyleConfig
  extends Properties<string | number>,
    PropertiesHyphen<string | number> {
  height?: Property.Height<string | number>;
  minHeight?: Property.MinHeight<string | number>;
  maxHeight?: Property.MaxHeight<string | number>;
}
