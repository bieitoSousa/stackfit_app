import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { icons, mapStyle } from '../../theme';

export const BodyMap = ({
    style,
    region,
    navigation,
    markers,
    searchText,
    onChangeSearchText,
    navigationScreem,
    onPress,
}) => {

    const filteredMarkers = () => {
        if (searchText) {
            markers.filter(function (marker) {
                return marker.title.includes(searchText);
            });
        }
        else
            return markers;
    }

    return (
        <View style={{
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            ...style
        }}
        >
            <MapView
                customMapStyle={mapStyle}
                region={region}
                style={styles.map}
            >
                {filteredMarkers().map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker.coordinate}
                        title={marker.title}
                        description={marker.description}
                        onPress={() => {
                            navigation.navigate('StaroilDetailScreen', {
                                marker: marker,
                            });
                        }}
                    //image={{uri: icons.marketPin}}
                    >
                        <Image
                            source={icons.staroilInactive}
                            style={{ width: 40, height: 40 }}
                            resizeMode='contain' />
                    </Marker>
                ))}
            </MapView>

        </View>

    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {

        height: '100%',
        width: '100%',
        //   width: Dimensions.get('screen').width,
        //   height: Dimensions.get('screen').height,
    },
});

/*
const region = {
    latitude: 40.463667,
    longitude: -3.74922,
    latitudeDelta: 10.5,
    longitudeDelta: 9,
};

const markers = [
    {
        coordinate:{
            'latitude': 42.2314,
            'longitude': -8.71245
        },
        title:'Vigo',
        description:'City ​​of Vigo'
    },
    {
        coordinate :{
            'latitude': 37.3826,
            'longitude': -5.99629
        },
        title:'Sevilla',
        description:'City ​​of Sevilla'

    },
    {
        coordinate :{
            'latitude': 41.3879,
            'longitude': 2.16992
        },
        title:'Barcelona',
        description:'City ​​of Barcelona'
    }
];
*/