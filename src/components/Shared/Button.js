import React from "react";
import {TouchableOpacity, Text} from "react-native";
import {btnDefault} from "../../styles/buttons";

function Button(props) {
  const {style, text} = props

  return (
      <TouchableOpacity style={style ? style.container : btnDefault.container}>
        <Text style={style ? style.text : btnDefault.text}>
          {text}
        </Text>
      </TouchableOpacity>
  );
}

export default Button;
