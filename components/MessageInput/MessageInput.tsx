import { View, Text, TouchableOpacity, TextInput, StyleSheet, Pressable, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/themed'

export default function MessageInput() {
    const [message, setMessage] = useState("");

    function sendMessage(): void {
        console.warn('发送')
        setMessage('');
    }

    function onPlusClicked(): void {
        console.warn('加号')
    }

    function handlePress() {
        if (message) {
           sendMessage();
        } else {
            onPlusClicked();
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={100}
        >
        <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.iconButton} onPress={handlePress}>
                <Icon name="microphone" type="font-awesome-5" size={24} color="grey" />
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder="Type a message..."
                value={message}
                onChangeText={setMessage}
            />
            <Pressable style={styles.sendButton} onPress={handlePress}>
                {message ? <Icon name="paper-plane" type="font-awesome-5" size={18} color="white" /> : <Icon name="plus" type="font-awesome-5" size={21} color="white" />}
            </Pressable>
        </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        paddingVertical: 8,
        marginBottom: 10
    },
    input: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#e0e0e0',
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