import React from 'react';
import { Box, NativeBaseProvider } from 'native-base';

const App = () => {
  return (
    <Box
      bg={{
        linearGradient: {
          colors: ['lightBlue.300', 'violet.800'],
          start: [0, 0],
          end: [1, 0],
        },
      }}
      p="12"
      rounded="lg"
      _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
    >
      This is a Box with Linear Gradient
    </Box>
  );
};

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

export default () => {
  return (
    <NativeBaseProvider config={config}>
      <App />
    </NativeBaseProvider>
  );
};