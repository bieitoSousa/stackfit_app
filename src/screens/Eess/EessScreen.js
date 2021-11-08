
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { getStaroilMarketStaroilList } from '../../store/marker/market.effect';;
import { BodySearchBar } from '../../components/body/BodySearchBar';
import { THEME } from '../../theme';

export const EessScreen = ({ navigation }) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    useEffect(() => {
        getStaroilMarketStaroilList(dispatch);
        // getStaroilMarketWorkshopList(dispatch);
        // getStaroilMarketRestaurantList(dispatch);
        // getStaroilMarketHotelList(dispatch);
    }, []);
    const marketStaroilData = useSelector(state => state.market.marketStaroilData);
    // first element : Spain
    const [searchText, onChangeSearchText] = React.useState('');

    // const marketWorkshopsData = useSelector(state => state.market.marketWorkshopsData);
    // const marketRestaurantData = useSelector(state => state.market.marketRestaurantData);
    // const marketHotelData = useSelector(state => state.market.marketHotelData);
    
    const filteredStaroilData = marketStaroilData.filter(function (staroil) {
        return staroil.title.includes(searchText);
    });
    
    return (
        <View style={styles.container}>
            <BodySearchBar
                placeholder={t('SHEARCHFORSTAROILPOINTS')}
                placeholderTextColor={THEME.SEARCH_BAR.PLACE_HOLDER_TEXT_COLOR}
                style={styles.SearchBarContainer}
                searchText={searchText}
                onChangeSearchText={onChangeSearchText}
            />
            {( marketStaroilData) ?
                <View>
                    <Text>
                        {
                            JSON.stringify(filteredStaroilData, null, 3)
                        }
                    </Text>
                </View>
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
    HeaderTitleContainer: {
        // height: '20%',
        // width: '100%',
        // padding: '5%',
        // backgroundColor: THEME.TITLE_CONTAINER.backgroundColor,
    },
    SearchBarContainer: {
        height: '17%',
        width: '100%',
        padding: '5%',
        backgroundColor: THEME.TITLE_CONTAINER.backgroundColor,
        //backgroundColor: 'red',
    },
    BodyMapContainer: {
        height: '63%',
        width: '100%',
        // backgroundColor: THEME.TITLE_CONTAINER.backgroundColor,
        backgroundColor: 'blue',
    },
})


