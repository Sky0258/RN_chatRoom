import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { storeData } from '@/src/store/dataStore';
import { router } from 'expo-router';

export default function login() {
    // 模拟数据，后期要改
    const ul = [
        {
            "id": 1,
            "username": "sky",
            "imageUrl": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fc0271e06-53c3-47f5-922d-1d06a6126172%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1715676490&t=f43a6e2a2f5655823b1be7ad1df1a23b"
        },
        {
            "id": 2,
            "username": "Mike",
            "imageUrl": "https://img0.baidu.com/it/u=4050015060,2212620442&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
        },
        {
            "id": 3,
            "username": "Alice",
            "imageUrl": "https://img0.baidu.com/it/u=868510210,2647591546&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
        }
    ]
    const [value, setValue] = useState("");
    async function loginSubmit() {
        // await storeData('userID', value);
        await storeData('userInfo', JSON.stringify(ul[Number(value) - 1]));
        
        router.push({
            pathname: "/(tabs)/message"
        })
    }
    return (
        <View>
            <Text>login</Text>
            <TextInput value={value} onChangeText={text => setValue(text)}  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}/>
            <Button title='点击' onPress={loginSubmit}></Button>
        </View>
    )
}