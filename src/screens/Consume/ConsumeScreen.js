import React from 'react'
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native'
import { TextDefault } from '../../components/text/TextDefault'

export const ConsumeScreen = ({ navigation }) => {
    const { t, i18n } = useTranslation();
    return (
        <View style ={styles.container}>
            <TextDefault>
                {t('CONSUME')}
            </TextDefault>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
