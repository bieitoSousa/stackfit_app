import React, { useRef } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { icons } from '../theme';
import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { TachographScreen } from '../screens/Tachograph/TachographScreen';
import { EessScreen } from '../screens/Eess/EessScreen';
import { DocumentScreeen } from '../screens/Document/DocumentScreeen';
import { ConsumeScreen } from '../screens/Consume/ConsumeScreen';
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();


export const CustomNavigation = () => {
    const { t, i18n } = useTranslation();
    // Animated Tab Indicator...
    const tabOffsetValue = useRef(new Animated.Value(0)).current;
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                showLabel: true,
                tabBarInactiveTintColor: 'gray',
                tabBarActiveTintColor: 'gray',
                tabBarStyle: {
                    height: "10%",//89,
                    paddingHorizontal: 10,
                    elevation: 0,
                    borderTopWidth: 0,
                },
                tabBarLabelPosition: 'below-icon',
                tabBarIconStyle: {
                    paddingTop: 0,
                },
                tabBarLabelStyle: styles.labelIcon,
            })}>

                {
                }
                <Tab.Screen name={"Home"} component={HomeScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.containerIcon}>
                            <Image
                                source={focused ? icons.homeActive : icons.homeInactive}
                                style={styles.tabIcons}>
                            </Image>
                        </View>
                    ),
                    title :  t('HOME') ,
                    headerShown: false,
                }} 
                // listeners={({ navigation, route }) => ({
                //     // Onpress Update....
                //     tabPress: e => {
                //         Animated.spring(tabOffsetValue, {
                //             toValue: 0,
                //             useNativeDriver: true
                //         }).start();
                //     }
                // })}
                ></Tab.Screen>

                <Tab.Screen name={"Tachograph"} component={TachographScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.containerIcon}>
                            <Image
                                source={focused ? icons.tachographActive : icons.tachographInactive}
                                style={styles.tabIcons}>
                            </Image>
                        </View>
                    ),
                    title :  t('TACHOGRAPH') ,
                    headerShown: false,
                }}
                // listeners={({ navigation, route }) => ({
                //     // Onpress Update....
                //     tabPress: e => {
                //         Animated.spring(tabOffsetValue, {
                //             toValue: getWidth(),
                //             useNativeDriver: true
                //         }).start();
                //     }
                // })}
                ></Tab.Screen>


                {

                    // Extra Tab Screen For Action Button..
                }

                <Tab.Screen name={"Eess"} component={EessScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            width: 60,
                            height: 60,
                            backgroundColor: 'orange',
                            borderRadius: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: Platform.OS == "android" ? 50 : 30
                        }}>
                            <Image 
                                source={focused ? icons.staroilActive : icons.staroilInactive }
                                style={styles.tabIcons}
                            ></Image>
                        </View>
                    ),
                    tabBarLabelStyle: styles.customLabelIcon,
                    title :  t('EESS') ,
                    headerShown: false,

                }} 
                // listeners={({ navigation, route }) => ({
                //     // Onpress Update....
                //     tabPress: e => {
                //         Animated.spring(tabOffsetValue, {
                //             toValue: getWidth() * 3,
                //             useNativeDriver: true
                //         }).start();
                //     }
                // })}
                ></Tab.Screen>

                <Tab.Screen name={"Document"} component={DocumentScreeen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.containerIcon}>
                            <Image
                                source={focused ? icons.documentationActive : icons.documentationInactive}
                                style={styles.tabIcons}>
                            </Image>
                        </View>
                    ),
                    title :  t('DOCUMENT') ,
                    headerShown: false,
                }}
                //  listeners={({ navigation, route }) => ({
                //     // Onpress Update....
                //     tabPress: e => {
                //         Animated.spring(tabOffsetValue, {
                //             toValue: getWidth() * 3,
                //             useNativeDriver: true
                //         }).start();
                //     }
                // })}
                ></Tab.Screen>

                <Tab.Screen name={"Consume"} component={ConsumeScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.containerIcon}>
                            <Image
                                source={focused ? icons.consumeActive : icons.consumeInactive}
                                style={styles.tabIcons}>
                            </Image>
                        </View>
                    ),
                    title :  t('CONSUME') ,
                    headerShown: false,
                }}
                //  listeners={({ navigation, route }) => ({
                //     // Onpress Update....
                //     tabPress: e => {
                //         Animated.spring(tabOffsetValue, {
                //             toValue: getWidth() * 4,
                //             useNativeDriver: true
                //         }).start();
                //     }
                // })}
                ></Tab.Screen>

            </Tab.Navigator>

        </NavigationContainer>
    );
}

function getWidth() {
    let width = Dimensions.get("window").width

    // Horizontal Padding = 20...
    width = width - 80

    // Total five Tabs...
    return width / 5
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabIcons: {
        width: 45,
        height: 45,
    },
    containerIcon:{
        position: 'absolute',
        top: 8
    },
    labelIcon:{
        position: 'absolute',
        top :45,
    },
    customLabelIcon:{
        position: 'absolute',
        top :20,
    }
});