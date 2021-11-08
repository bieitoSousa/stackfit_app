import React from 'react'
import { StyleSheet, View } from 'react-native'
import { THEME } from '../../theme'
import { TextDefault } from '../text/TextDefault'

export const HeaderTitle = ({ text, style }) => {
    return (
        <View style={
            {
                height: 125,
                backgroundColor: '#2A2A2A',
                ...style
            }
        }>
            <TextDefault style={styles.textTitle}>
                {text}
            </TextDefault>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 125,
        width: '100%',
        backgroundColor: '#2A2A2A',
    },
    textTitle: {
        height: 66,
        backgroundColor: '#2A2A2A',
        color: THEME.TITLE_TEXT.TEXT_COLOR,
        fontFamily: THEME.FONT_FAMILY,
        fontSize: 30,
        lineHeight: 36,
        marginTop: 20,
        marginLeft: 33,
        marginRight: 33,
        marginBottom: 33,

    }
})
