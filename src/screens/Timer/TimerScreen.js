
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet, View } from 'react-native'
import { TextDefault } from '../../components/text/TextDefault'
import { images } from '../../theme';


export const TimerScreen = ({ navigation }) => {

    const { t, i18n } = useTranslation();
    return (
        <View style ={styles.container}>
            <TextDefault>
                {t('TIMER')}
            </TextDefault>
            <Image style={styles.image}
                         sorce={images.homeScreenImg}
                        //sorce={icons.homeInactive}
                    />
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        height:200,
        width:200,
    }
})

