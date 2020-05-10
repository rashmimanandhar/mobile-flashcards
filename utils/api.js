import {decks} from './_DATA';
import {AsyncStorage} from "react-native";

const DECKS_STORAGE_KEY = "mobileFlashcards:decks"

export async function getDecks() {
  try {
    const decksFromStorage = await AsyncStorage.getItem(DECKS_STORAGE_KEY);

    if (decksFromStorage === null) {
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
    }
    console.log(decks);
    return decksFromStorage === null ? decks : decksFromStorage;

  } catch (e) {
    console.log(e);
  }
}

export async function getDeck(title) {
  try {
    const decksFromStorage = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    return JSON.parse(decksFromStorage)[title];
  } catch (e) {
    console.log(e);
  }

}

export async function saveDeckTitle(title) {
  try {
    await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          title: title,
          questions: []
        }
      })
    )
  } catch (e) {
    console.log(e);
  }
}

export async function addCardToDeck(title, card) {
  try {
    const deck = await getDeck(title);
    await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          questions: [...deck.questions].concat(card)
        }
      })
    )
  } catch (e) {
    console.log(e);
  }
}

export async function removeDeck(title) {
  try {
    const decksFromStorage = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    const decks = JSON.parse(decksFromStorage);
    decks[title] = undefined;
    delete decks[title];
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
  } catch (e) {
    console.log(e);
  }
}

export async function resetDecks() {
  try {
    await AsyncStorage.removeItem(DECKS_STORAGE_KEY);
  } catch (e) {
    console.log(e);
  }
}
