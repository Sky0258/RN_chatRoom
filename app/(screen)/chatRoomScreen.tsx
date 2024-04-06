import { View, Text, FlatList, SafeAreaView, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useEffect } from 'react'
import Message from '@/components/Message/Message'
import MessageInput from '@/components/MessageInput';
import ChartMessageData from '@/assets/data/Chat';
import { useLocalSearchParams, router } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

export default function chatRoomScreen() {
    const chatRoomId = useLocalSearchParams().id;
    const navigation = useNavigation();
    navigation.setOptions({ title: chatRoomId });

    console.warn(chatRoomId, 'chatRoomId')
    return (
        <SafeAreaView style={styles.contain}>
            <FlatList
                data={ChartMessageData.messages}
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