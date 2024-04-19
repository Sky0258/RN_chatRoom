import AsyncStorage from "@react-native-async-storage/async-storage";
import { userInfoType } from "../types";

let userInfo: userInfoType = {
    id: "",
    name: "",
    imageUrl: ""
};
const storeData = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value);
        if(key == 'userInfo') {
            userInfo = JSON.parse(value);
        }
    } catch (e) {
        console.error(e);
    }
};

const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        } else {
            console.error('未找到该 key 值')
        }
    } catch (e) {
        console.error(e);
    }
};

export { storeData, getData, userInfo }