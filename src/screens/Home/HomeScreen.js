import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { getStaroilMarketStaroilList } from '../../context/marker/market.effect';
import { getRegionSpainList } from '../../context/region/region.effect';
import { BodyMap } from '../../components/body/BodyMap';
import { THEME } from '../../theme';



export const HomeScreen = ({ navigation }) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();


    useEffect(() => {
        getStaroilMarketStaroilList(dispatch);
        getRegionSpainList(dispatch);
        // getStaroilMarketWorkshopList(dispatch);
        // getStaroilMarketRestaurantList(dispatch);
        // getStaroilMarketHotelList(dispatch);
    }, []);
    const marketStaroilData = useSelector(state => state.market.marketStaroilData);
    // first element : Spain
    const regionSpain = useSelector(state => state.region.regionSpainData)[0];


    // const marketWorkshopsData = useSelector(state => state.market.marketWorkshopsData);
    // const marketRestaurantData = useSelector(state => state.market.marketRestaurantData);
    // const marketHotelData = useSelector(state => state.market.marketHotelData);
    return (
        <View style={styles.container}>
            {(regionSpain && marketStaroilData) ?
                <BodyMap
                    navigation={navigation}
                    style={styles.BodyMapContainer}
                    region={regionSpain}
                    markers={marketStaroilData}
                    navigationScreem='HomeDetailScreen'
                    //onPress={() => { navigation.navigate('StaroilDetailScreen') }}
                />
                :
                <ActivityIndicator size="small" color="#0000ff" />
            }
        </View>
    )

}

// padding

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    BodyMapContainer: {
       flex:1
    },
})


