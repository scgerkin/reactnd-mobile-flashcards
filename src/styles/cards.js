import {StyleSheet} from "react-native";
import {CLR_GREY_LT, CLR_WHITE_DRK} from "./colors";


export const card = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CLR_GREY_LT,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    color: CLR_WHITE_DRK,
    fontSize: 32,
  },
  content: {
    color: CLR_WHITE_DRK,
    fontSize: 16
  }
});


