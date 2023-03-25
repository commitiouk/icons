import React from 'react';
import styled from 'styled-components';
import { ComponentMeta } from '@storybook/react';

/* @Components */
import { Icon } from './Icon';

/* @Icons */
import * as ICONS from '../../src';

export default {
  title: 'Icon',
  component: Icon,
  parameters: {
    layout: 'default',
    docs: {
      description: {
        component: 'Preview for icons',
      },
    },
  },
  args: {},
  argTypes: {
    size: {
      control: 'select',
      defaultValue: 'md',
    },
  },
} as ComponentMeta<typeof Icon>;

const ItemStyled = styled.div(() => ({
  display: 'flex',
  width: '100%',
  maxWidth: '20%',
  margin: '0 2.5% 2.5%',
  alignItems: 'center',
  padding: '8px 14px',
  borderRadius: '4px',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.05) 0px 5px 15px 0px',
  boxSizing: 'border-box',
}));

const CaptionStyled = styled.span(() => ({
  color: '#333',
  fontSize: '14px',
  paddingLeft: '10px',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',

  '&:before': {
    content: '""',
    width: '1px',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
}));

export const Icons = ({ ...args }): JSX.Element => (
  <div style={{ display: 'flex', flexWrap: 'wrap', margin: '2rem' }}>
    {Object.keys(ICONS).map((icon: string) => (
      <ItemStyled key={icon}>
        <Icon glyph={ICONS[icon]} {...args} />
        <CaptionStyled>{icon}</CaptionStyled>
      </ItemStyled>
    ))}
  </div>
);

const CODE_SAMPLE = `
/* install */
| npm install @commitio/icons@version

/** package.json */
"dependencies": {
  "@commitio/icons": "^version"
}
/* package.json */

/* import */
import { YOUR_ICON } from '@commitio/icons';

/* usage */
const SomeComponent = () => <YourIcon />;
`;

Icons.parameters = {
  docs: {
    source: {
      code: `${CODE_SAMPLE}`,
      language: 'jsx',
      type: 'auto',
    },
  },
};
