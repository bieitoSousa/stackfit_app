import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { THEME } from '../../theme';
import { ConsumeScreen } from './ConsumeScreen';


export const ConsumeStack = ({ navigation }) => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
        screenOptions={{
            headerShadowVisible: false,
            headerStyle: {
                backgroundColor: THEME.STACK_NAVIGATION.BACKGROUND_COLOR,
                shadowColor: null,
                shadowOffset: null,
                borderWidth: null,
                borderWidth: 0,
                borderColor: THEME.STACK_NAVIGATION.BORDER_COLOR,
                elevation: 0,
                shadowOpacity: 0
            },
            headerTitleStyle: {
                fontWeight: THEME.STACK_NAVIGATION_HEADER.TEXT_WEIGHT,
                fontSize: THEME.STACK_NAVIGATION_HEADER.TEXT_SIZE,
                color: THEME.STACK_NAVIGATION_HEADER.TEXT_COLOR,
            },
            headerTintColor: THEME.STACK_NAVIGATION.TINT_COLOR,
            headerBackTitleVisible: false,
            gestureEnabled: false,
            title: ''
        }}
    >
        <Stack.Screen
            name="ConsumeScreen"
            component={ConsumeScreen}
            options={{ headerShown: false }}
        />
       
    </Stack.Navigator>
    )
}