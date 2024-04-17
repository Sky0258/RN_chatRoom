import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Button, View } from 'react-native';
import { User } from '@/src/types';
import UserItem from '@/components/UserItem';
import { reqFriendList, reqUserList } from '@/src/api/modules/user';
import { userID } from '@/src/store/dataStore';

export default function TabTwoScreen() {
    const [Users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        reqFriendList({
            userID: userID
        }).then(response => {
            setUsers(response.data.results);
        })
    }, [])
    return (
        <View style={styles.container}>
            <FlatList
                data={Users}
                renderItem={({ item }) => <UserItem userItem={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    }
});
