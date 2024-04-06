import React from 'react';
import { Stack } from 'expo-router';

export default function ScreenLayout() {
    return (
        <Stack>
            <Stack.Screen name="chatRoomScreen" options={{
                headerTitleAlign: "center"
            }} />
        </Stack>
    );
}
