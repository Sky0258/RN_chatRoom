import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Button, View } from 'react-native';
import { User } from '@/src/types';
import UserItem from '@/components/UserItem';
import { reqUserList } from '@/src/api/modules/user';

export default function TabTwoScreen() {
    const [Users, setUsers] = useState<User[]>([]);

    const usersData = [{
        username: "12",
        url: "https://randomuser.me/api/portraits/men/36.jpg"
    },
    {
        username: "2",
        url: "https://randomuser.me/api/portraits/men/36.jpg"
    },
    {
        username: "3",
        url: "https://randomuser.me/api/portraits/men/36.jpg"
    }]

    useEffect(() => {
        reqUserList().then(response => {
            console.log('121212');
            console.warn( response);
            console.log(response);
        })
    })
    function getData() {
        reqUserList().then(response => {
            console.log('121212');
            console.warn( response);
            console.log(response);
        })
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={usersData}
                renderItem={({ item }) => <UserItem userItem={item} />}
            />
            <Button title="点击" onPress={getData}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    }
});
