import React from "react";
import {View, Text} from "react-native";
import DefaultButton from "../Buttons/DefaultButton";
import {btnIncorrect, btnSuccess} from "../../styles/buttons";

function QuizButtons(props) {
  const {markAnswer} = props;
  return (
      <View style={{flex: 1}}>
        <View style={{flex: 3, flexDirection: "row"}}>
          <DefaultButton
              style={btnSuccess}
              text={"Correct"}
              onPressEvent={() => markAnswer(true)}
          />
          <DefaultButton
              style={btnIncorrect}
              text={"Incorrect"}
              onPressEvent={() => markAnswer(false)}/>
        </View>
        <View style={{flex: 1}}>
          <DefaultButton text={"Reset Quiz"}/>
        </View>
      </View>
  );
}

export default QuizButtons;
