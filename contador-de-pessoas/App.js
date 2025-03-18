import React from 'react';
import { ScrollView } from 'react-native';
import Contador from './src/Contador';

const App = () => {
  return (
    <ScrollView>
    <Contador nomeLoja="❄️✨ Inverno Encantado" />
    </ScrollView>
  );
};
export default App;