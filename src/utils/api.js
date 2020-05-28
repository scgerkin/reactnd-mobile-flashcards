import AsyncStorage from "@react-native-community/async-storage";
import {dummyDecks} from "./_DATA";

export const DECK_STORAGE_KEY = "com.scgrk.reactnd.mobileFlashCards::decks"

export function fetchDecks() {
  return dummyDecks;
  //return AsyncStorage.getItem(DECK_STORAGE_KEY)
}

export function submitEntry({entry, key}) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({[key]:entry}))
}

export function removeEntry(key) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
      .then((results) => {
        const data = JSON.parse(results);
        data[key] = undefined
        delete data[key]
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
      })
}
