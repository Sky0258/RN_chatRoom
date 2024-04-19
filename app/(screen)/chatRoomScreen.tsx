import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Message from '@/components/Message/Message'
import MessageInput from '@/components/MessageInput';
import ChartMessageData from '@/assets/data/Chat';
import { useLocalSearchParams } from 'expo-router';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { reqChatRoomMessageRecord } from '@/src/api/modules/chatRoom';
import { message } from '@/src/types';
import { userInfo } from '@/src/store/dataStore';

export default function chatRoomScreen() {
    const [messageList, setMessageList] = useState<message[]>([]);
    const [socket, setSocket] = useState<WebSocket>();

    const chatRoomID = useLocalSearchParams().id;
    const navigation = useNavigation();
    navigation.setOptions({ title: chatRoomID });

    // 接口获取聊天室消息
    function getChartRoomRecords() {
        reqChatRoomMessageRecord({
            chatRoomID
        }).then((res) => {
            setMessageList(res.data.results);
        })
    }
    
    useEffect(() => {
        // 获取聊天室消息
        getChartRoomRecords();

        // 创建 webSocket 连接
        const socket = new WebSocket('ws://localhost:8082');
        setSocket(socket);
        socket.onmessage = async (event) => {
            const receiveData = JSON.parse(event.data);
            setMessageList((prevList) => [...prevList, receiveData]);
            console.log('收到数据');
        }
        return () => {
            socket.close();
        };
    }, []);

    const getItemLayout = (index: any) => ({
        length: 10, // 项的固定高度（假设每个项的高度为50）
        offset: 10 * index, // 每个项的偏移量
        index, // 索引
    });

    function handleEmitSend(params: message) {
        params.user = userInfo;
        if (socket != undefined) {
            socket.send(JSON.stringify(params));
        }
    }

    return (
        <SafeAreaView style={styles.contain}>
            <FlatList
                data={messageList}
                renderItem={({ item }) => <Message messages={item} />}
            />
            <MessageInput chatRoomID={chatRoomID} handleSendMessage={handleEmitSend} userInfo={userInfo}></MessageInput>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        padding: 10,
        paddingBottom: 0
    },
})