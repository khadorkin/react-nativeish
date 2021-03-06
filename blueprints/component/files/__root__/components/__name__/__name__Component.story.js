import React from 'react'
import { storiesOf, action } from '@kadira/react-native-storybook'
import <%= pascalEntityName %> from './<%= camelEntityName %>Component'
storiesOf('<%= pascalEntityName %>', module)
  .add('with text', () => (
    <<%= pascalEntityName %> onClick={action('clicked')}>
      Hello Button
    </<%= pascalEntityName %>>
  ))
  .add('with some emoji', () => (
    <<%= pascalEntityName %> onClick={action('clicked')}>
      😀 😎 👍 💯
    </<%= pascalEntityName %>>
  ))
  .add('with no onClick', () => (
    <<%= pascalEntityName %>>
      Test
    </<%= pascalEntityName %>>
  ))
