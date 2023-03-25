import { CSSProperties, HTMLAttributes, ComponentType } from 'react';

export type TIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xlg';

export type TIconSizeMap = {
  [key in TIconSize]: string;
};

export interface TIconProps<P> extends HTMLAttributes<SVGSVGElement> {
  glyph?: ComponentType<P>;
  /**
   * **xs**: **16px**
   *
   * **sm**: **20px**
   *
   * **md**: **24px**
   *
   * **lg**: **32px**
   *
   * **xlg**: **40px**
   *
   */
  size?: TIconSize;
  /**
   * **hex**: – any valid hex value
   */
  color?: string;
  className?: string;
  /**
   * **style**: – will be applied directly to svg tag
   */
  style?: CSSProperties;
  /**
   * **props**: – any valid HTML props
   */
  props?: P;
}
