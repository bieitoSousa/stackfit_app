
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { TextDefault } from '../../components/text/TextDefault'
import { images } from '../../theme';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { RootTabScreenProps } from '../../../types';


export const TimerScreen = ({ navigation }: RootTabScreenProps<'TabOne'>) => {

    const { t, i18n } = useTranslation();

    const users = [
        {
            name: 'brynn',
            avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
        },
        {
            name: 'thot leader',
            avatar:
                'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
        },
        {
            name: 'jsa',
            avatar: 'https://uifaces.co/our-content/donated/bUkmHPKs.jpg',
        },
        {
            name: 'talhaconcepts',
            avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
        },
        {
            name: 'andy vitale',
            avatar: 'https://uifaces.co/our-content/donated/NY9hnAbp.jpg',
        },
        {
            name: 'katy friedson',
            avatar:
                'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
        },
    ]
    return (
        <ScrollView >

            <View style={styles.container}>
                <TextDefault>
                    {t('TIMER')}
                </TextDefault>
                <Image 
                style={styles.image}
                sorce={images.homeScreenImg}
                //sorce={icons.homeInactive}
                />
            </View>
            <Card>
                <Card.Title>CARD WITH DIVIDER</Card.Title>
                <Card.Divider />
                {
                    users.map((u, i) => {
                        return (
                            <View key={i} style={styles.user}>
                                <Image
                                    style={styles.image}
                                    resizeMode="cover"
                                    source={{ uri: u.avatar }}
                                />
                                <Text style={styles.name}>{u.name}</Text>
                            </View>
                        );
                    })
                }
            </Card>
            <Card>
                <Card.Title>HELLO WORLD</Card.Title>
                <Card.Divider />
                <Card.Image
                    style={{ padding: 0 }}
                    source={{
                        uri:
                            'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                    }}
                />
                <Text style={{ marginBottom: 10 }}>
                    The idea with React Native Elements is more about component
                    structure than actual design.
                </Text>
                <Button
                    icon={
                        <Icon
                            name="code"
                            color="#ffffff"
                            iconStyle={{ marginRight: 10 }}
                        />
                    }
                    buttonStyle={{
                        borderRadius: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 0,
                    }}
                    title="VIEW NOW"
                />
            </Card>
        </ScrollView>



    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 20,
        color: '#0277bd',
    },
    user: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
})

