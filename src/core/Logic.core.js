import React, { useEffect, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';

import { StyleSheet, useColorScheme } from 'react-native';

import AppLoading from 'expo-app-loading';

import { ErrorLogger } from './ErrorLogger';
import { AppNavigation } from '../navigation/AppNavigation';
import store from '../store';
import '../../localization';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts,
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic,
  } from '@expo-google-fonts/montserrat';

export const LogicCore = () => {

    const colorScheme = useColorScheme();
    // const dispatch = useDispatch();
    // load fonts
    let [fontsLoaded] = useFonts({
        Montserrat_100Thin,
        Montserrat_100Thin_Italic,
        Montserrat_200ExtraLight,
        Montserrat_200ExtraLight_Italic,
        Montserrat_300Light,
        Montserrat_300Light_Italic,
        Montserrat_400Regular,
        Montserrat_400Regular_Italic,
        Montserrat_500Medium,
        Montserrat_500Medium_Italic,
        Montserrat_600SemiBold,
        Montserrat_600SemiBold_Italic,
        Montserrat_700Bold,
        Montserrat_700Bold_Italic,
        Montserrat_800ExtraBold,
        Montserrat_800ExtraBold_Italic,
        Montserrat_900Black,
        Montserrat_900Black_Italic,
      });  
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <SafeAreaView style={styles.container} >
                    <ErrorLogger></ErrorLogger>
                    <AppNavigation colorScheme={colorScheme} ></AppNavigation>
            </SafeAreaView>
        );
    }   
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
});