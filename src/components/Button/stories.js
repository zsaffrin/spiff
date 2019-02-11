import React from 'react';
import { string } from 'prop-types';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import styled, { ThemeProvider } from 'styled-components';
import Button from './Button';
import spiff from '../../themes/spiff';
import notes from './README.md';

const activeTheme = spiff;

const ButtonList = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ButtonListItem = styled.li`
  padding: 2px;
`;

const withTheme = storyFn => <ThemeProvider theme={activeTheme}>{storyFn()}</ThemeProvider>;

const BasicButton = ({
  color, content, icon, size,
}) => (
  <ThemeProvider theme={activeTheme}>
    <Button
      color={color}
      content={content}
      icon={icon}
      size={size}
      click={action(`${content}-button-clicked`)}
    />
  </ThemeProvider>
);
BasicButton.propTypes = {
  color: string,
  content: string,
  icon: string,
  size: string,
};
BasicButton.defaultProps = {
  color: '',
  content: '',
  icon: '',
  size: '',
};

const colorNameButtonList = [
  <BasicButton content="primary" color="primary" />,
  <BasicButton content="secondary" color="secondary" />,
  <BasicButton content="success" color="success" />,
  <BasicButton content="danger" color="danger" />,
];

const colorValButtonList = [
  <BasicButton content="#a5cfed" color="#a5cfed" />,
  <BasicButton content="#9966e0" color="#9966e0" />,
  <BasicButton content="#b8a900" color="#b8a900" />,
  <BasicButton content="#bb00cc" color="#bb00cc" />,
  <BasicButton content="#54da48" color="#54da48" />,
];

const sizeButtonList = [
  <BasicButton content="Tiny" size="tiny" />,
  <BasicButton content="Small" size="small" />,
  <BasicButton content="Default" />,
  <BasicButton content="Large" size="large" />,
  <BasicButton content="Huge" size="huge" />,
];

const iconButtonList = [
  <BasicButton icon="⚙️" content="Settings" />,
  <BasicButton icon="💾" content="Save" />,
  <BasicButton icon="❌" content="Cancel" />,
];

storiesOf('Button', module)
  .addDecorator(withNotes)
  .addDecorator(withTheme)
  .add('Basic', () => <Button content="Button" click={action('Button clicked')} />, {
    notes: { markdown: notes },
  })
  .add(
    'Colors',
    () => (
      <div>
        <ButtonList>
          {colorNameButtonList.map(item => (
            <ButtonListItem>{item}</ButtonListItem>
          ))}
        </ButtonList>
        <ButtonList>
          {colorValButtonList.map(item => (
            <ButtonListItem>{item}</ButtonListItem>
          ))}
        </ButtonList>
      </div>
    ),
    {
      notes: { markdown: notes },
    },
  )
  .add(
    'Sizes',
    () => (
      <ButtonList>
        {sizeButtonList.map(item => (
          <ButtonListItem>{item}</ButtonListItem>
        ))}
      </ButtonList>
    ),
    {
      notes: { markdown: notes },
    },
  )
  .add(
    'Icons',
    () => (
      <ButtonList>
        {iconButtonList.map(item => (
          <ButtonListItem>{item}</ButtonListItem>
        ))}
      </ButtonList>
    ),
    {
      notes: { markdown: notes },
    },
  );
