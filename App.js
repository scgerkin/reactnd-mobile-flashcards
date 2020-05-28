import React from 'react'
import {StatusBar, Text, View} from 'react-native'
import Constants from "expo-constants";

export default function App() {
  return (
    <View>
      <FlashcardStatusBar backgroundColor={"black"} barStyle={"light-content"}/>
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
