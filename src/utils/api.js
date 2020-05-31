import AsyncStorage from "@react-native-community/async-storage";
import {testDecks} from "./_DATA";

export const DECK_STORAGE_KEY = "com.scgrk.reactnd.mobileFlashCards::decks";

export function fetchDecks() {
  //fixme return storage after styling is done
  return new Promise((res, rej) => {
    res(JSON.stringify(testDecks))
  });
  //return AsyncStorage.getItem(DECK_STORAGE_KEY);
}

export function saveState(state) {
  return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(state))
}

export function clearStorage() {
  return AsyncStorage.removeItem(DECK_STORAGE_KEY);
}
