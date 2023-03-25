import React from 'react';

/* @Types */
import { TIconProps } from './Icon.types';

/* @Styled */
import { IconStyled } from './Icon.styled';

export const Icon = <P extends unknown>({ glyph: Glyph, size = 'md', color, style, props = {} as P }: TIconProps<P>): JSX.Element => (
  <IconStyled size={size} color={color}>
    <Glyph style={style} {...props} />
  </IconStyled>
);
