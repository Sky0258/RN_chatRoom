import { FlatList, SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Message from '@/components/Message/Message'
import MessageInput from '@/components/MessageInput';
import ChartMessageData from '@/assets/data/Chat';
import { useLocalSearchParams } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { reqChatRoomMessageRecord } from '@/src/api/modules/chatRoom';
import { message } from '@/src/types';

export default function chatRoomScreen() {
    const [messageList, setMessageList] = useState<message[]>();
    const chatRoomID = useLocalSearchParams().id;
    const navigation = useNavigation();
    navigation.setOptions({ title: chatRoomID });

    function getChartRoomRecords() {
        reqChatRoomMessageRecord({
            chatRoomID
        }).then((res) => {
            setMessageList(res.data.results);
        })
    }

    useEffect(getChartRoomRecords, []);
    return (
        <SafeAreaView style={styles.contain}>
            <FlatList
                data={messageList}
                renderItem={({ item }) => <Message messages={item} />}
            />
            <MessageInput></MessageInput>
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