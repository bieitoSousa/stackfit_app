import React from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { icons, THEME } from '../theme';

import { HomeStack } from '../screens/Home/HomeStack';
import { ConsumeStack } from '../screens/Consume/ConsumeStack';
import { DocumentStack } from '../screens/Document/DocumentStack';
import { EessStack } from '../screens/Eess/EessStack';
import { Image } from 'react-native';
import { SimpleNavigation } from './SimpleNavigation';
import { CustomNavigation } from './CustomNavigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const Stack = createStackNavigator();
const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
  };
  
export type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export const AppNavigation = () => {
    const { t, i18n } = useTranslation();
    return (
    //    <SimpleNavigation></SimpleNavigation>
       <CustomNavigation></CustomNavigation>
    );
}