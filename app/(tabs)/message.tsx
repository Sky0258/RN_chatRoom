import { StyleSheet, FlatList } from 'react-native';
import { Text, View } from '@/components/Themed';

import ChatRoomItem from '@/components/ChatRoomItem';
import ChatRoomsData from '@/assets/data/chatRooms';


export default function TabOneScreen() {
    return (
        <View>
            <FlatList
                data={ChatRoomsData}
                renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    // contain: {
    //     width: "100%"
    // }
});
