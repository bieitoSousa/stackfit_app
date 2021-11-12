import React from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native';

import { IExercise } from '../../interface/IExercise';
import { ISesion } from '../../interface/ISesion';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Props } from '../../navigation/AppNavigation';

export const BodyCardList = (Object: ISesion[] | IExercise[],
     navigation  : Props ,
     navigationScreen :string,
     ) => {
    return (
        <ScrollView>
            {
                Object.map((obj: ISesion | IExercise, i: number) => {
                    <TouchableOpacity onPress={() => {
                        navigation.navigate(navigationScreen, {
                            obj: obj,
                        });
                    }}>
                    <Card key={i}>
                        <Card.Title>{obj.name}</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={{ padding: 0 }}
                            resizeMode="cover"
                            source={{ uri: obj.img }}
                        />
                        <Text style={{ marginBottom: 10 }}>
                            {obj.desc}
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
                    </TouchableOpacity>  
                })
    }
        </ScrollView>
    )
}
