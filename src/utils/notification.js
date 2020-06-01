import AsyncStorage from "@react-native-community/async-storage";
import {Notifications} from "expo";
import * as Permissions from "expo-permissions";

const NOTIFICATION_KEY = "com.scgrk.reactnd.mobileFlashCards::notification";

export async function turnOffLocalNotification() {
  return await AsyncStorage.removeItem(NOTIFICATION_KEY).
      then(Notifications.cancelAllScheduledNotificationsAsync);
}

function createNotification() {
  return {
    title: "Take a quiz",
    body: "Don't forget to take a quiz today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true,
    },
  };
}

export async function setLocalNotification() {
  const notification = await AsyncStorage.getItem(NOTIFICATION_KEY);

  if (!notification) {
    Permissions.askAsync(Permissions.NOTIFICATIONS).then(({status}) => {
      if (status === "granted") {
        console.log("PERMISSION GRANTED");
        Notifications.cancelAllScheduledNotificationsAsync();
        const tomorrow = getTomorrow();
        Notifications.scheduleLocalNotificationAsync(createNotification(), {
          time: tomorrow,
          repeat: "day",
        });
      }
    });
    AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
  }
}

function getTomorrow() {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(20);
  tomorrow.setMinutes(0);

  return tomorrow;
}
