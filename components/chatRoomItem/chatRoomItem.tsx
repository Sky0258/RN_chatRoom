import { Pressable, StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from '@rneui/themed';
import { Badge } from 'react-native-paper';
import React from 'react'
import { router } from 'expo-router';


export default function ChartRoom({ chatRoom }: any) {
    const user = chatRoom.users[1];
    function handleItemPress() {
        router.push({
            pathname: "/(screen)/chatRoomScreen",
            params: { id: chatRoom.id }
        })
    }
    return (
        <Pressable onPress={handleItemPress}>
            <ListItem bottomDivider>
                <View>
                    <Avatar
                        rounded
                        size={40}
                        source={{ uri: user.imgUrl }}
                    />
                    {chatRoom.newMessage && <Badge size={18} style={styles.badge}>{chatRoom.newMessage}</Badge>}
                </View>

                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{chatRoom.lastMessage.content}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content right>
                    <ListItem.Title right>{chatRoom.lastMessage.createAt}</ListItem.Title>
                    <ListItem.Subtitle right> </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    badge: {
        position: "absolute",
        right: -5,
        top: -3,
        backgroundColor: "#6750a5" 

        
    }
})