import React, {Fragment} from "react";
import {StatusBar, View} from "react-native";
import Constants from "expo-constants";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./src/redux/reducers";
import middleware from "./src/redux/middleware";
import MainDisplay from "./src/components/MainDisplay";
import {CLR_GREY_LT} from "./src/styles/colors";

const store = createStore(reducer, middleware);

function App() {
  return (
      <Provider store={store}>
        <Fragment>
          <FlashcardStatusBar backgroundColor={CLR_GREY_LT}
                              barStyle={"light-content"}/>
          <MainDisplay/>
        </Fragment>
      </Provider>
  );
}

//fixme using the height here pushes the header of the stack navigator down way
// too far, but not using it makes add new question slide into the status bar
function FlashcardStatusBar({backgroundColor, ...props}) {
  return (
      <View style={{backgroundColor, height: Constants.statusBarHeight}}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
      </View>
  );
}

export default App;
