import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet,Button } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { User } from '@/src/types';
import UserItem from '@/components/UserItem';

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
        fetch('http://127.0.0.1:3007/api/register', {
            method: 'POST'
        }).then(response => {
            console.warn( response);
            console.log(response);
        });
    })
    function getData() {
        fetch('http://127.0.0.1:3007/api/register', {
            method: 'POST'
        }).then(response => {
            console.warn( response);
            console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
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
