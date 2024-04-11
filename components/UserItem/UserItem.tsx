import { View, Text } from 'react-native'
import React from 'react'
import { Avatar, List } from 'react-native-paper'

export default function UserItem({ userItem }: any) {
  return (
    <View>
      <List.Item title={userItem.username} left={() => <Avatar.Image style={{marginLeft: 10}} size={35} source={{ uri: userItem.url}} />} />
    </View>
  )
}