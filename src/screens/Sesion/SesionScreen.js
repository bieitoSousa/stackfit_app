
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { BodySearchBar } from '../../components/body/BodySearchBar';
import { THEME } from '../../theme';
import { getSesionList } from '../../context/sesion/sesion.effect';

export const SesionScreen = ({ navigation }) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    useEffect(() => {
        getSesionList(dispatch);
    }, []);
    const sesionData = useSelector(state => state.sesion.sesionData);
    // first element : Spain
    const [searchText, onChangeSearchText] = React.useState('');

    // const marketWorkshopsData = useSelector(state => state.market.marketWorkshopsData);
    // const marketRestaurantData = useSelector(state => state.market.marketRestaurantData);
    // const marketHotelData = useSelector(state => state.market.marketHotelData);
    
    const filteredSesionData = sesionData && sesionData.filter(function (sesion) {
        return sesion.name.includes(searchText);
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
            {( filteredSesionData) ?
                <View>
                    <Text>
                        {
                            JSON.stringify(filteredSesionData, null, 3)
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


