import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { userID } from '@/src/store/dataStore';

export default function Message({ messages }: any) {
    const myId: string = userID;       // 后期要改
    const isMyMessage: boolean = messages.user.id == myId;
    const bubbleStyle = isMyMessage ? styles.myBubble : styles.otherBubble;
    const textColor = isMyMessage ? 'white' : 'black';
    const backgroundColor = isMyMessage ? '#FF3B30' : '#34C759';

    return (
        <View style={styles.bubbleContainer}>
            {isMyMessage ? null : <Image source={{ uri: messages.user.imageUri }} style={styles.avatar} />}
            <View style={[styles.messageContainer, isMyMessage ? styles.myMessageContainer : styles.otherMessageContainer]}>
                <View style={[styles.bubble, bubbleStyle, { backgroundColor }]}>
                    <Text style={[styles.messageText, { color: textColor }]}>{messages.content}</Text>
                </View>
            </View>
            {isMyMessage ? <Image source={{ uri: messages.user.imageUri }} style={styles.avatar} /> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    bubbleContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    messageContainer: {
        flex: 1,
    },
    myMessageContainer: {
        alignItems: 'flex-end',
    },
    otherMessageContainer: {
        alignItems: 'flex-start',
    },
    bubble: {
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 8,
        maxWidth: '70%',
    },
    myBubble: {
        alignSelf: 'flex-end',
    },
    otherBubble: {
        alignSelf: 'flex-start',
    },
    messageText: {
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#EFEFF4',
        paddingVertical: 8,
    },
    input: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#F2F2F7',
        marginRight: 8,
    },
    iconButton: {
        padding: 10,
    },
    sendButton: {
        backgroundColor: '#007AFF',
        borderRadius: 20,
        padding: 8,
    },
});