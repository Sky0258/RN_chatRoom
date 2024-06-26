import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import ChatRoomItem from '@/components/ChatRoomItem';
import { reqChatRoomList, reqChatRoomUserList } from '@/src/api/modules/chatRoom';
import { userInfo } from '@/src/store/dataStore';
import { chatRoomItemType } from '@/src/types';
import { useFocusEffect } from '@react-navigation/native';


export default function TabOneScreen() {
    const [chatRoomList, setChatRoomList] = useState<chatRoomItemType[]>([]);

    // 在当前页面获取焦点时更新数据
    useFocusEffect(useCallback(() => {
        getChatRoomList();
    }, []));

    function getChatRoomList() {
        reqChatRoomList({
            userID: userInfo.id
        }).then((res) => {
            const chatRoomList = formatData(res.data.results);
            chatRoomList.then(res => {
                setChatRoomList(res);
            })
        })
    }

    async function getChatRoomUserList(chatRoomID: string) {
        try {
            const res = await reqChatRoomUserList({ chatRoomID });
            return res.data.results;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    interface itemType {
        "chatRoomID": string,
        "newMessage": string,
        "createdAt": string,
        "lastMessageContent": string,
        "groupName": string
    }

    async function formatData(chatRooms: itemType[]) {
        const targetList = await Promise.all(chatRooms.map(async (item: itemType) => {
            const target: chatRoomItemType = {
                id: item.chatRoomID,
                lastMessage: {
                    content: item.lastMessageContent,
                    createAt: item.createdAt.slice(0, 10)
                },
                newMessage: item.newMessage,
                users: await getChatRoomUserList(item.chatRoomID)
            };
            return target;
        }));

        return targetList;
    }
    return (
        <View>
            <FlatList
                data={chatRoomList}
                renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
            />
        </View>

    );
}

