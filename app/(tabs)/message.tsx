import { StyleSheet, FlatList } from 'react-native';
import { Text, View } from '@/components/Themed';

import ChatRoomItem from '@/components/chatRoomItem';
import chatRoomsData from '@/assets/data/chatRooms';


export default function TabOneScreen() {
    return (
        <View>
            <FlatList
                data={chatRoomsData}
                renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
            />
        </View>

    );
}

const styles = StyleSheet.create({
});
