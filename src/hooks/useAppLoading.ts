import { useEffect, useState } from "react";

import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Sora_700Bold, Sora_400Regular } from '@expo-google-fonts/sora';

export function useAppLoading() {
  const [isReady, setIsReady] = useState(false)

  const [fontsLoaded] = useFonts({
    Sora_700Bold,
    Sora_400Regular,
  });

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  return { isReady: isReady && fontsLoaded }
}