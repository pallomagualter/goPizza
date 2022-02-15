import React from 'react';
import AppLoading from 'expo-app-loading'; //carregar fontes quando as importadas não estiver disponível
import { StatusBar } from 'expo-status-bar';
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import { ThemeProvider } from 'styled-components/native';
import { AuthProvider } from '@hooks/auth';

import { SignIn } from '@screens/SignIn';

import theme from './src/theme';

export default function App() {
  const [fontLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  });

  if (!fontLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme} >
      <StatusBar style="light" translucent backgroundColor="transparent" />

      <AuthProvider>
        <SignIn />
      </AuthProvider>
    </ThemeProvider>
  );
}