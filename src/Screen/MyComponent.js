import * as React from 'react';
import { Card, Divider, Text } from 'react-native-paper';

const MyComponent = () => (
  <Card>
    <Card.Content>
      <Text variant="titleLarge">Aula Da Professora Ingrid</Text>
      <Divider />
      <Text variant="bodyMedium">Nessa aula do SENAC aprendemos sobre react-native, de como colocar-mos componentes em nosso projeto incluindo o tema escuro.</Text>
      <Divider />
      <Card.Cover 
        source={require('../../assets/Senac.png')}
        style={{width: 330}} />
    </Card.Content>
  </Card>
);

export default MyComponent;