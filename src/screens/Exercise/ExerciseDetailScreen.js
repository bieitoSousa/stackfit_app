import AppLoading from 'expo-app-loading';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { BodyStarRatingBar } from '../../components/body/BodyStarRatingBar';
import { HeaderBackButton } from '../../components/buttons/HeaderBackButton';
import { HeaderTitle } from '../../components/headers/HeaderTitle';
import { TextDefault } from '../../components/text/TextDefault';

export const ExerciseDetailScreen = (
    navigation,
    route,
) => {
    //let marker = [];
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <HeaderBackButton navigation={navigation} />,
        });
    }, [navigation]);

    const { exercise } = route.params;
    const { t, i18n } = useTranslation();

    return (
        <View style={styles.container}>
            {
                (exercise) ?
                    <View style={styles.container}>
                        <HeaderTitle
                            text={exercise.title}
                        />
                        <ScrollView>
                            <Image
                                source={{
                                    // uri: exercise.img,
                                    uri: 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=QKSdOTnAaUE3cxMWsJ2_sQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=142.46701&pitch=0&thumbfov=100'
                                }}
                                style={styles.imgContainer}
                            />
                            <BodyStarRatingBar
                                rating={marker.ratings}
                                stylesStarImage={styles.stylesStarImage}
                                stylesContainer={styles.ratingsContainer}
                            />
                            <View style={styles.dataContainer}>
                                <View style={styles.hoursContainer}>
                                    <TextDefault> {t('HOURS')}</TextDefault>
                                    <TextDefault>{marker.hours}</TextDefault>
                                </View>
                                <View style={styles.locationContainer}>
                                    <TextDefault> {t('LOCATION')}</TextDefault>
                                    <TextDefault>{marker.address}</TextDefault>
                                    <TextDefault>{marker.cp}{marker.city}</TextDefault>
                                    <TextDefault>{marker.province}</TextDefault>
                                </View>
                                <View style={styles.contactContainer}>
                                    <TextDefault> {t('CONTACT')}</TextDefault>
                                    <TextDefault>{marker.phone}</TextDefault>
                                    <TextDefault>{marker.email}</TextDefault>
                                    <TextDefault>{marker.web}</TextDefault>
                                </View>

                            </View>
                            <View style={styles.footButton}>
                                <TextDefault
                                    style={styles.footerText}
                                > {t('LLEVAME')}</TextDefault>
                                <Image
                                    style={styles.footerIcon}
                                    source={icons.flecha_white}
                                />
                            </View>
                        </ScrollView>
                    </View>
                    :
                    <AppLoading />
            }

        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    HeaderTitleContainer: {

    },
    imgContainer: {
        height: 198.69,
    },
    dataContainer: {
        marginLeft: 35,
        marginRight: 28,
        height: 215,
        backgroundColor: 'white',
        fontSize: 15,
        //backgroundColor: 'red',

    },
    ratingsContainer: {
        marginTop: 35.62,
        marginLeft: 35,
        marginBottom: 27.86,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        //flexDirection: 'row',
        //justifyContent: 'space-between',

    },
    icon: {
        height: 16.83,
        width: 16.83,
        color: '#F07D19',
        margin: 5.3,
    },
    hoursContainer: {},
    locationContainer: {},
    contactContainer: {},
    footButton: {
        height: 120,
        width: '100%',
        flexDirection: 'row',
        // backgroundColor: THEME.TITLE_CONTAINER.backgroundColor,
        backgroundColor: '#F07D19',

    },
    footerIcon: {
        height: 47.8,
        width: 106.4,
        marginVertical: 36,
        marginRight: 30,
        // backgroundColor: 'red',
    },
    footerText: {
        height: 30,
        width: 200,
        color: 'white',
        fontSize: 30,
        lineHeight: 30,
        marginVertical: 45,
        marginLeft: 35,
        // backgroundColor: 'blue',
    },
    stylesStarImage: {
        resizeMode: 'cover',
        width: 16.83,
        height: 16.83,
    },
})    

