import {decks} from './_DATA';
import {AsyncStorage} from "react-native";
import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions';

const DECKS_STORAGE_KEY = "mobileFlashcards:decks"
const NOTIFICATION_KEY = "mobileFlashcards:notification"

export async function getDecks() {
  try {
    const decksFromStorage = await AsyncStorage.getItem(DECKS_STORAGE_KEY);

    if (decksFromStorage === null) {
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
    }
    return decksFromStorage === null ? decks : JSON.parse(decksFromStorage);

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
    console.log("*************************")
    console.log(deck);
    console.log("*************************")
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

export async function deleteDeck(title) {
  try {
    const decksFromStorage = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    const decks = JSON.parse(decksFromStorage);
    decks[title] = undefined;
    delete decks[title];
    await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
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

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createLocalNotification() {
  return {
    title: 'Take a quiz',
    body: "Don't forget to take your quiz today!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({status}) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createLocalNotification(),
                {
                  time: tomorrow,
                  repeat: 'day'
                }
              )
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })

}
