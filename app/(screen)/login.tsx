import { View, Text, Button } from 'react-native'
import React from 'react'
import { storeData, getData, userID } from '@/src/store/dataStore';
import { router } from 'expo-router';

export default function login() {
    async function loginSubmit() {
        await storeData('userID', '1');
        console.log('loginPage:', userID);
        
        router.push({
            pathname: "/(tabs)/message"
        })
    }
    return (
        <View>
            <Text>login</Text>
            <Button title='点击' onPress={loginSubmit}></Button>
        </View>
    )
}