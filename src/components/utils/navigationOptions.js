import {CLR_GREY_LT, CLR_WHITE_DRK} from "../../styles/colors";

export function createStackScreenOptions(title) {
  return {
    title: title,
    headerTitleAlign: "center",
    headerStyle: {
      height: 100,
      backgroundColor: CLR_GREY_LT,
    },
    headerTintColor: CLR_WHITE_DRK,
  };
}
