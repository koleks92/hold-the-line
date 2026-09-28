import AsyncStorage from "@react-native-async-storage/async-storage";

export async function storeData(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (e) {
    console.error("Error inserting: ", e);
    return false;
  }
}

export async function getData(key: string) {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    } else {
      return 0;
    }
  } catch (e) {
    console.error("Error reading: ", e);
    return false;
  }
}

export async function removeData(key: string) {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (e) {
    console.error("Error deleting: ", e);
    return false;
  }
}
