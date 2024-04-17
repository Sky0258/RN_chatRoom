import React from 'react';
import { Stack } from 'expo-router';
export const unstable_settings = {
    initialRouteName: 'login',
};

export default function ScreenLayout() {
    return (
        <Stack>
            <Stack.Screen name="login" options={{
                headerTitleAlign: "center"
            }} />
            <Stack.Screen name="chatRoomScreen" options={{
                headerTitleAlign: "center"
            }} />
        </Stack>
    );
}
