import React from 'react'
import {StatusBar, Text, View} from 'react-native'
import Constants from "expo-constants";
import {CLR_BG_03} from "./src/utils/colors";

export default function App() {
  return (
    <View>
      <FlashcardStatusBar backgroundColor={CLR_BG_03} barStyle={"light-content"}/>
      <Text>App.js</Text>
    </View>
  );
}

function FlashcardStatusBar({backgroundColor, ...props}) {
  return (
      <View style={{backgroundColor, height: Constants.statusBarHeight}}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
      </View>
  );
}
