import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { SignUp } from './src/screens/SignUp';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar translucent backgroundColor="#6b21a8" barStyle="light-content"/>
      <SignUp/>
    </NativeBaseProvider>
  );
}
