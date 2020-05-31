import React from "react";
import {TouchableOpacity, Text} from "react-native";
import {btnDefault} from "../../styles/buttons";

function DefaultButton(props) {
  const {style, text, onPressEvent} = props

  return (
      <TouchableOpacity
          style={style ? style.container : btnDefault.container}
          onPress={onPressEvent}
      >
        <Text style={style ? style.text : btnDefault.text}>
          {text}
        </Text>
      </TouchableOpacity>
  );
}

export default DefaultButton;
