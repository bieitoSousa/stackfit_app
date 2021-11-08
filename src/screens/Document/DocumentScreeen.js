
import React from 'react'
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native'
import { BodyStarRatingBar } from '../../components/body/BodyStarRatingBar';
import { TextDefault } from '../../components/text/TextDefault'

export const DocumentScreeen = ({ navigation }) => {
    const { t, i18n } = useTranslation();
    return (
        <View style ={styles.container}>
            <TextDefault>
                {t('DOCUMENT')}
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


