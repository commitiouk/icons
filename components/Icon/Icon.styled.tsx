import styled from 'styled-components';

/* @Types */
import { TIconSize, TIconSizeMap } from './Icon.types';

export const ICON_SIZE_MAP: TIconSizeMap = {
  xs: '16px',
  sm: '20px',
  md: '24px',
  lg: '32px',
  xlg: '40px',
};

export const IconStyled = styled.span<{ size: TIconSize; color: string }>(({ size, color }) => ({
  display: 'flex',
  flexShrink: '0',
  alignItems: 'center',
  justifyContent: 'center',
  width: ICON_SIZE_MAP[size],
  height: ICON_SIZE_MAP[size],
  color,
  transition: 'transform var(--transition-default), fill var(--transition-default)',

  '& > svg': {
    fill: 'currentColor',
  },
}));
