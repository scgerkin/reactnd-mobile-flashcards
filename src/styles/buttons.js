import {StyleSheet} from "react-native";
import {
  CLR_DRK_BLUE,
  CLR_GREEN,
  CLR_GREY_LT, CLR_PURPLE,
  CLR_RED, CLR_SEAFOAM,
  CLR_WHITE_LT, CLR_YELLOW,
} from "./colors";

export const btnDefault = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CLR_GREY_LT,
    padding: 20,
    paddingLeft: 15,
    paddingRight: 15,
    height: 45,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: CLR_WHITE_LT,
    fontSize: 32,
    textAlign: "center"
  }
})

export const btnText = StyleSheet.create({
  container: {
    ...btnDefault.container,
    backgroundColor: CLR_SEAFOAM
  },
  text: {
    ...btnDefault.text
  }
})

export const btnSuccess = StyleSheet.create({
  container: {
    ...btnDefault.container,
    backgroundColor: CLR_GREEN,
  },
  text: {
    ...btnDefault.text
  }
})

export const btnWrong = StyleSheet.create({
  container: {
    ...btnDefault.container,
    backgroundColor: CLR_RED
  },
  text: {
    ...btnDefault.text
  }
})

export const btnSubmit = StyleSheet.create({
  container: {
    ...btnDefault.container,
    backgroundColor: CLR_DRK_BLUE
  },
  text: {
    ...btnDefault.text
  }
})

export const btnStart = StyleSheet.create({
  container: {
    ...btnDefault.container,
    backgroundColor: CLR_PURPLE
  },
  text: {
    ...btnDefault.text
  }
})

//todo change to a text style button, container styling no wrapper
export const btnDelete = StyleSheet.create({
  container: {
    ...btnText.container,
    backgroundColor: CLR_YELLOW
  },
  text: {
    ...btnText.text
  }
})
