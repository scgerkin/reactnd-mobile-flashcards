import React, {Fragment} from "react";
import DefaultButton from "../Buttons/DefaultButton";
import {btnIncorrect, btnSuccess} from "../../styles/buttons";

function QuizButtons(props) {
  const {markAnswer} = props;
  return (
      <Fragment>
        <DefaultButton
            style={btnSuccess}
            text={"Correct"}
            onPressEvent={() => markAnswer(true)}
        />
        <DefaultButton
            style={btnIncorrect}
            text={"Incorrect"}
            onPressEvent={() => markAnswer(false)}/>
      </Fragment>
  );
}

export default QuizButtons;
