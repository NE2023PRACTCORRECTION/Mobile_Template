import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://10.5.221.141:5000";

export const sendRequest = async (
  api,
  method,
  payload = {},
  isAuth = false
) => {
  try {
    const token = isAuth ? await AsyncStorage.getItem("Authorization") : null;

    const headers = {
      "Content-Type": "application/json",
      ...(isAuth && { Authorization: `Bearer ${token}` })
    };

    let response;
    switch (method) {
      case "GET":
        response = await axios.get(API_URL + api, { headers });
        break;
      case "POST":
        response = await axios.post(API_URL + api, payload, { headers });
        break;
      case "PUT":
        response = await axios.put(API_URL + api, payload, { headers });
        break;
      case "DELETE":
        response = await axios.delete(API_URL + api, { headers });
        break;
      default:
        throw new Error("Invalid method");
    }

    return response;
  } catch (error) {
    console.error("Error occurred during request:", error);
    throw error;
  }
};
