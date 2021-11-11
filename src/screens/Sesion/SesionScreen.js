
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { BodySearchBar } from '../../components/body/BodySearchBar';
import { THEME } from '../../theme';
import { getSesionList } from '../../context/sesion/sesion.effect';
import { template } from '@babel/core';

export const SesionScreen = ({ navigation }) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const [sesionListView, setSesionListView] = useState();
    const [searchText, onChangeSearchText] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const getSesionListData = useSelector(state => state.sesion.sesionData);

    useEffect(() => {
        getSesion();
    }, [])

    useEffect(() => {
        getSesion();
    }, [refreshing])

    const getSesion = () => {
        getSesionList(dispatch);
    }

    useEffect(() => {
        if (getSesionList && filteredSesionData) {
            buildSesionView();
        }
    }, [getSesionListData])

    // first element : Spain

    // const marketWorkshopsData = useSelector(state => state.market.marketWorkshopsData);
    // const marketRestaurantData = useSelector(state => state.market.marketRestaurantData);
    // const marketHotelData = useSelector(state => state.market.marketHotelData);

    const filteredSesionData = getSesionListData && getSesionListData.filter(function (sesion) {
        return sesion.name.includes(searchText);
    });

    const buildSesionView = () => {
        let tmp;
        let block = [];
        if (getSesionListData && !!getSesionListData.length) {
            // tmp = filteredSesionData.map((el, index) => {
            return (
                <ScrollView>
                    {filteredSesionData.map((el, index) => (
                        <View key={index} >
                            <View >
                                <Text >{el.name}</Text>
                                <Text >{el.type}</Text>
                                <Text >{el.date}</Text>
                                <Text >{t('SESION_BLOCK')}</Text>
                                {/*
                                ( el.sessionBlock && !! el.sessionBlock.length)?
                                    el.sessionBlock.map((el, index) => {
                                        return (
                                            <View key={index} >
                                                <Text >{el.type}</Text>
                                                <Text >{el.desc}</Text>
                                                <Text >{el.img}</Text>
                                                <Text >{t('TIMER')}</Text>
                                                {
                                                ( el.timer && !! el.timer.length)?
                                                    el.timer.map((el, index) => {
                                                        return (
                                                            <View key={index} >
                                                                <Text >{t('TYPE') + ': '}{el.type}</Text>
                                                                <Text >{t('TIMER') + ': '}{el.timer}</Text>
                                                                <Text >{t('UD') + ': '}{el.ud}</Text>
                                                                <Text >{t('REST') + ': '}{el.rest}</Text>
                                                                <Text >{t('CDA') + ': '}{el.cda}</Text>
                                                            </View>
                                                        )
                                                    })
                                                  :
                                                  ''  
                                                }
                                                <Text >{t('BLOCK')}</Text>
                                                {
                                                    ( el.block && !! el.block.length)?
                                                    el.block.map((el, index) => {
                                                        return (
                                                            <View key={index} >
                                                                {
                                                                    ( el.exercise && !! el.exercise.length)?
                                                                    el.exercise.map((el, index) => {
                                                                        return (
                                                                            <View key={index} >
                                                                                <Text >{t('EXERCISE') + ': '}{el}</Text>
                                                                            </View>
                                                                        )
                                                                    })
                                                                    :
                                                                    ''
                                                                }
                                                            </View>
                                                        )
                                                    }
                                                    )
                                                    :
                                                    ''
                                                }
                                            </View>
                                        )
                                    })
                                :
                                ''    
                                */}
                            </View>
                        </View>
                    ))
                    })
                </ScrollView>
            )
        }
        //setSesionListView(tmp);
        //return tmp;
    }
    /*
    const buildSesionView = () => {
        let tmp;
        let block = [];
        if (getSesionListData && !!getSesionListData.length) {
            tmp = filteredSesionData.map((el, index) => {
                return (
                    <ScrollView>
                        <View key={index} >
                            <View >
                                <Text >{el.name}</Text>
                                <Text >{el.type}</Text>
                                <Text >{el.date}</Text>
                                <Text >{t('SESION_BLOCK')}</Text>
                                {
                                ( el.sessionBlock && !! el.sessionBlock.length)?
                                    el.sessionBlock.map((el, index) => {
                                        return (
                                            <View key={index} >
                                                <Text >{el.type}</Text>
                                                <Text >{el.desc}</Text>
                                                <Text >{el.img}</Text>
                                                <Text >{t('TIMER')}</Text>
                                                {
                                                ( el.timer && !! el.timer.length)?
                                                    el.timer.map((el, index) => {
                                                        return (
                                                            <View key={index} >
                                                                <Text >{t('TYPE') + ': '}{el.type}</Text>
                                                                <Text >{t('TIMER') + ': '}{el.timer}</Text>
                                                                <Text >{t('UD') + ': '}{el.ud}</Text>
                                                                <Text >{t('REST') + ': '}{el.rest}</Text>
                                                                <Text >{t('CDA') + ': '}{el.cda}</Text>
                                                            </View>
                                                        )
                                                    })
                                                  :
                                                  ''  
                                                }
                                                <Text >{t('BLOCK')}</Text>
                                                {
                                                    ( el.block && !! el.block.length)?
                                                    el.block.map((el, index) => {
                                                        return (
                                                            <View key={index} >
                                                                {
                                                                    ( el.exercise && !! el.exercise.length)?
                                                                    el.exercise.map((el, index) => {
                                                                        return (
                                                                            <View key={index} >
                                                                                <Text >{t('EXERCISE') + ': '}{el}</Text>
                                                                            </View>
                                                                        )
                                                                    })
                                                                    :
                                                                    ''
                                                                }
                                                            </View>
                                                        )
                                                    }
                                                    )
                                                    :
                                                    ''
                                                }
                                            </View>
                                        )
                                    })
                                :
                                ''    
                                }
                            </View>
                        </View>
                    </ScrollView>
                );
            })
        }
        setSesionListView(tmp);
    }
    */

    return (
        <View style={styles.container}>
            <BodySearchBar
                placeholder={t('SHEARCHFORSTAROILPOINTS')}
                placeholderTextColor={THEME.SEARCH_BAR.PLACE_HOLDER_TEXT_COLOR}
                style={styles.SearchBarContainer}
                searchText={searchText}
                onChangeSearchText={onChangeSearchText}
            />
            <ScrollView>
                {/*
                    filteredSesionData.map((el, index) => (
                        <View key={index} >
                            <View >
                                <Text >{el.name}</Text>
                                <Text >{el.type}</Text>
                                <Text >{el.date}</Text>
                                <Text >{t('SESION_BLOCK')}</Text>
                                {/*
                        ( el.sessionBlock && !! el.sessionBlock.length)?
                            el.sessionBlock.map((el, index) => {
                                return (
                                    <View key={index} >
                                        <Text >{el.type}</Text>
                                        <Text >{el.desc}</Text>
                                        <Text >{el.img}</Text>
                                        <Text >{t('TIMER')}</Text>
                                        {
                                        ( el.timer && !! el.timer.length)?
                                            el.timer.map((el, index) => {
                                                return (
                                                    <View key={index} >
                                                        <Text >{t('TYPE') + ': '}{el.type}</Text>
                                                        <Text >{t('TIMER') + ': '}{el.timer}</Text>
                                                        <Text >{t('UD') + ': '}{el.ud}</Text>
                                                        <Text >{t('REST') + ': '}{el.rest}</Text>
                                                        <Text >{t('CDA') + ': '}{el.cda}</Text>
                                                    </View>
                                                )
                                            })
                                          :
                                          ''  
                                        }
                                        <Text >{t('BLOCK')}</Text>
                                        {
                                            ( el.block && !! el.block.length)?
                                            el.block.map((el, index) => {
                                                return (
                                                    <View key={index} >
                                                        {
                                                            ( el.exercise && !! el.exercise.length)?
                                                            el.exercise.map((el, index) => {
                                                                return (
                                                                    <View key={index} >
                                                                        <Text >{t('EXERCISE') + ': '}{el}</Text>
                                                                    </View>
                                                                )
                                                            })
                                                            :
                                                            ''
                                                        }
                                                    </View>
                                                )
                                            }
                                            )
                                            :
                                            ''
                                        }
                                    </View>
                                )
                            })
                        :
                        ''    
                        }
                            </View>
                        </View>
                    )
                    )
                    // :
                    // <ActivityIndicator size="small" color="#0000ff" />
                    */}
            </ScrollView>
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


