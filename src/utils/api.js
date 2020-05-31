import AsyncStorage from "@react-native-community/async-storage";

export const DECK_STORAGE_KEY = "com.scgrk.reactnd.mobileFlashCards::decks";

export function fetchDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY);
}

export function saveState(state) {
  return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(state))
}

export function clearStorage() {
  return AsyncStorage.removeItem(DECK_STORAGE_KEY);
}
