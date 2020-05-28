import React from 'react'
import { Text, View} from 'react-native'
import FlashcardStatusBar from "./src/components/FlashcardStatusBar";

export default function App() {
  return (
    <View>
      <FlashcardStatusBar backgroundColor={"black"} barStyle={"light-content"}/>
      <Text>App.js</Text>
    </View>
  );
}
