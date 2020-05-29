import {StyleSheet} from "react-native";
import {
  CLR_BLACK_DRK,
  CLR_GREY_LT,
  CLR_WHITE_DRK,
  CLR_WHITE_LT,
} from "./colors";


export const cardDefault = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CLR_BLACK_DRK,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    color: CLR_WHITE_LT,
    fontSize: 32,
  },
  content: {
    color: CLR_WHITE_DRK,
    fontSize: 16
  }
});

export const deckPrimary = StyleSheet.create({
  container: {
    ...cardDefault.container,
  },
  title: {
    ...cardDefault.title
  },
  content: {
    ...cardDefault.content
  }
})

export const deckSecondary = StyleSheet.create({
  container: {
    ...cardDefault.container,
    backgroundColor: CLR_GREY_LT
  },
  title: {
    ...cardDefault.title
  },
  content: {
    ...cardDefault.content
  }
})
