import { Home } from "./src/screens/Home";
import { StatusBar } from "react-native";
import { Splash } from "./src/screens/splash";
import { useState } from "react";
import { preventAutoHideAsync } from "expo-splash-screen";

export default function App() {
  const [splashComplete, setSplashComplete] = useState(false);
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {splashComplete ? <Home /> : <Splash onComplete={setSplashComplete} />}
    </>
  );
}
