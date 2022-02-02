import React from 'react';
import { View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';

export default function App() {
  const [fontLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  });

  if(!fontLoaded){
    return <AppLoading />
  }

  return (
    <View>

    </View>
  );
}