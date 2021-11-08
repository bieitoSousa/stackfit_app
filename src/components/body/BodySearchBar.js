import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export const BodySearchBar = ({ style,placeholder,placeholderTextColor,searchText, onChangeSearchText }) => {

    return (
        <View style={{
            ...style
        }}
        >
            <TextInput
             style={styles.input}
              onChangeText={onChangeSearchText} 
              value={searchText}
              placeholder={placeholder}  
              placeholderTextColor ={placeholderTextColor}/>
        </View>

    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        //margin: 12,
        borderWidth: 2,
        borderRadius: 10,
        borderColor:'white',
        color:'white',
        padding: 10,
    },
});