import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    DMSerifDisplay: require("@/assets/fonts/DMSerifDisplay-Regular.ttf"),
    Outfit100: require("@/assets/fonts/Outfit-Thin.ttf"),
    Outfit200: require("@/assets/fonts/Outfit-ExtraLight.ttf"),
    Outfit300: require("@/assets/fonts/Outfit-Light.ttf"),
    Outfit400: require("@/assets/fonts/Outfit-Regular.ttf"),
    Outfit500: require("@/assets/fonts/Outfit-Medium.ttf"),
    Outfit700: require("@/assets/fonts/Outfit-Bold.ttf"),
    Outfit800: require("@/assets/fonts/Outfit-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hide();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeAreaProvider>
  );
}
