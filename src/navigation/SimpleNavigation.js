import React from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { icons, THEME } from '../theme';

import { HomeStack } from '../screens/Home/HomeStack';
import { TachographStack } from '../screens/Tachograph/TachographStack';
import { ConsumeStack } from '../screens/Consume/ConsumeStack';
import { DocumentStack } from '../screens/Document/DocumentStack';
import { EessStack } from '../screens/Eess/EessStack';
import { Image } from 'react-native';

const Stack = createStackNavigator();
const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const SimpleNavigation = () => {

    const { t, i18n } = useTranslation();

    return (
        <NavigationContainer >
            <MainStack.Navigator
                screenOptions={{
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: THEME.TAB_NAVIGATION.BACKGROUND_COLOR,
                        shadowColor: null,
                        shadowOffset: null,
                        borderWidth: null,
                        borderWidth: 0,
                        borderColor: THEME.TAB_NAVIGATION.BORDER_COLOR,
                        elevation: 0,
                        shadowOpacity: 0,
                        padding: 0,
                        margin: 0,
                    },
                    headerTitleStyle: {
                        fontWeight: THEME.TAB_NAVIGATION_HEADER.TEXT_WEIGHT,
                        fontSize: THEME.TAB_NAVIGATION_HEADER.TEXT_SIZE,
                        color: THEME.TAB_NAVIGATION_HEADER.TEXT_COLOR,
                        padding: 0,
                        margin: 0,
                    },
                    headerTintColor: THEME.TAB_NAVIGATION.BACKGROUND_COLOR,
                    headerBackTitleVisible: false,
                }}>
                <MainStack.Screen
                    name='MainNavigation'
                    component={MainTabs}
                    options={{ headerShown: false }}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}
export const MainTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                lazy: false,
                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? icons.homeActive : icons.homeInactive;
                    } else if (route.name === 'Tachograph') {
                        iconName = focused ? icons.tachographActive : icons.tachographInactive;
                    } else if (route.name === 'Eess') {
                        iconName = focused ? icons.staroilActive : icons.staroilInactive;
                    } else if (route.name === 'Consume') {
                        iconName = focused ? icons.consumeActive : icons.consumeInactive;
                    } else if (route.name === 'Document') {
                        iconName = focused ? icons.documentationActive : icons.documentationInactive;
                    }
                    return <Image source={iconName} style={{ height: route.name === 'Promotion' ? 75 : 45, width: route.name === 'Promotion' ? 75 : 45 }} />
                },
                tabBarInactiveTintColor: 'gray',
                tabBarActiveTintColor: 'gray',
                // tabBarShowLabel: false,
                tabBarStyle: {
                    // height: Dimensions.get('window').height * 0.1,
                    height: "10%",//89,
                    paddingHorizontal: 10,
                    //paddingVertical:5,
                    //marginVertical:10,
                    //borderWidth: 0,
                    elevation: 0,
                    borderTopWidth: 0,
                    //backgroundColor:'red',
                    //flexDirection: 'row',

                },
                tabBarLabelPosition: 'below-icon',
                tabBarIconStyle: {
                    //height: 31, width: 31,
                    paddingTop: 0,
                },
                tabBarLabelStyle: {
                    position: 'absolute',
                    bottom: "9%",
                    //backgroundColor:'green',
                }
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Tachograph"
                component={TachographStack}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Eess"
                component={EessStack}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Consume"
                component={ConsumeStack}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Document"
                component={DocumentStack}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
}
