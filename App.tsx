import React from 'react';

import {
  useFonts,
  Rajdhani_400Regular,
  Rajdhani_700Bold,
  Rajdhani_500Medium
} from '@expo-google-fonts/rajdhani';

import { AuthProvider } from './src/contexts/auth';
import {Routes} from './src/routes/index.routes';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Rajdhani_400Regular,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!fontsLoaded)
    return <AppLoading />;

  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  );
}