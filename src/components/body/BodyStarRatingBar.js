//import react in our code. 
import React from 'react'
import { useState } from 'react';
import {
    StyleSheet,
    View,
    Platform,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
//import all the components we are going to use.

export const BodyStarRatingBar = ({
    rating,
    stylesContainer,
    stylesStarImage,
    maxRanting,
    iconStarActive,
    iconStarInactive,
    iconStarHalf,
    justifyContent,
    alignItems,
    iconWidth,
    iconHeight,


}) => {
    const Max_rating = maxRanting ||5;
    const StarActive = iconStarActive||'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
    const StarInactive = iconStarInactive|| 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
    const StarHalf = iconStarHalf||'https://cdn-icons-png.flaticon.com/512/2107/2107737.png'
    return (
             <View style={{
                flex:1,
                justifyContent: justifyContent||'center',
                alignItems: alignItems ||'center',
                flexDirection: 'row',
                 ...stylesContainer
             }}> 
                {Array.apply(null, { length: Max_rating }).map((element, index) => (
                    <View key={index}>
                        <Image
                            style={{
                                resizeMode: 'cover',
                                width:iconWidth|| 40,
                                height:iconHeight|| 40,
                                ...stylesStarImage,
                            }}
                            source={
                                // value between current and next
                                (rating > index && rating < index + 1)
                                    ? { uri: StarHalf }
                                    // value less or greater than current
                                    : (index < rating)
                                        ? { uri: StarActive }
                                        : { uri: StarInactive }
                            }
                        />
                    </View>
                ))}
                {/*React_Native_rating_Bar()*/}
             </View> 
    );



}

/*
const React_Native_rating_Bar = () => {
    let rating_Bar = [];
//Array to hold the filled or empty Stars
for (var i = 1; i <= Max_rating; i++) {
    rating_Bar.push(
    <View>
      <Image
        style={styles.StarImage}
        source={
          i <= rating
            ? { uri: StarActive }
            : { uri: StarInactive }
        }
      />
    </View>
  );
}
return (
    rating_Bar
)

}

*/
