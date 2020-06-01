import React from "react";
import {StyleSheet, View} from "react-native";
import DefaultButton from "../Buttons/DefaultButton";
import {btnCorrect, btnIncorrect} from "../../styles/buttons";

function QuizButtons(props) {
  const {markAnswer} = props;
  return (
      <View style={style.container}>
        <DefaultButton
            style={btnCorrect}
            text={"Correct"}
            onPressEvent={() => markAnswer(true)}
        />
        <DefaultButton
            style={btnIncorrect}
            text={"Incorrect"}
            onPressEvent={() => markAnswer(false)}/>
      </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
  }
});

export default QuizButtons;
