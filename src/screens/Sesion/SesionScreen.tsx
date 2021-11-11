
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { BodySearchBar } from '../../components/body/BodySearchBar';
import { THEME } from '../../theme';
import { getSesionList } from '../../context/sesion/sesion.effect';
import { ISesion, ISessionBlock, ITimer, IBlock } from '../../interface/ISesion';
import { RootState } from '../../context';



export const SesionScreen = ({ navigation }) => {

    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    useEffect(() => {
        getSesionList(dispatch);
    }, []);

    const sesionData = useSelector<RootState, ISesion[]>((state) => state.sesion.sesionData);
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
            {(filteredSesionData) ?
                <ScrollView>
                    {
                        filteredSesionData && filteredSesionData.map((el: ISesion, i: number) => (
                            <View key={i} >
                                {el.type.length > 1 && <Text >{el.name}</Text>}
                                {el.type.length > 1 && <Text >{el.type}</Text>}
                                {el.type.length > 1 && <Text >{el.date}</Text>}
                                {
                                    el.sessionBlock && el.sessionBlock.map((el: ISessionBlock, i: number) => (
                                        <View key={i} >
                                            {el.type.length > 1 && <Text> {el.type} </Text>}
                                            {el.desc.length > 1 && <Text >{el.desc}</Text>}
                                            {el.img.length > 1 && <Text >{el.img}</Text>}
                                           
                                                        {el.timer.type.length > 1 && <Text> {el.timer.type} </Text>}
                                                        {el.timer.time.length > 1 && <Text >{el.timer.time}</Text>}
                                                        {el.timer.ud.length > 1 && <Text >{el.timer.ud}</Text>}
                                                        {el.timer.rest.length > 1 && <Text >{el.timer.rest}</Text>}
                                                        {el.timer.cda.length > 1 && <Text >{el.timer.cda}</Text>}   
                                          
                                            {    el.block && el.block.map((el: IBlock, i: number) => (
                                                    <View key={i} >
                                                        {el.desc.length > 1 && <Text> {el.desc} </Text>}
                                                        {el.exercise.length > 1 && <Text >{el.exercise}</Text>}
                                                        {el.desc.length > 1 && <Text >{el.desc}</Text>}
                                                    </View>
                                                ))}
                                        </View> // SesionBlock close
                                    ))}
                            </View>//filteredSesionData close
                        ))}


                </ScrollView> //Contain
                :
                <ActivityIndicator size="small" color="#0000ff" />
            }
        </View >
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


