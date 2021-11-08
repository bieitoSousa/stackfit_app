import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { THEME } from '../../theme';
import { TextDefault } from '../text/TextDefault';

export const HeaderBackButton = ({ navigation, text, onPress }) => {
    const { t, i18n } = useTranslation();
    return (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.header}>
            <TextDefault style={styles.text}>{text || t('BACK')}</TextDefault>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    header:{
       backgroundColor:'#2A2A2A',
    },
    text: {
        height: 30,
        width:68,
        marginTop: 27,
        marginLeft:27,
        marginRight:331,
        fontSize:15,
        fontFamily:THEME.FONT_FAMILY,
        color:'white',
        backgroundColor:'#2A2A2A',
    },
})