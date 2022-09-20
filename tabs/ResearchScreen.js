import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import IonIcons from "react-native-vector-icons/Ionicons"
const dummy_set = require('./dummy_Set1.json')

const width = Dimensions.get('screen').width;

const ResearchScreen = () => {

    return (
        <View style={{ backgroundColor: "#fcfcfc" }}>
            <View>
                <Text style={styles.heading}>215 Expert Opinion</Text>
                <Image
                    source={require('../images/data.png')}
                    style={styles.dataImg}
                />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    dummy_set.map((item, index) => (
                        <View style={styles.shot}>
                            <View style={styles.shotHead}>
                                <Text style={{ fontSize: 14, fontWeight: "600", color: "#484848" }}>{item.heading}</Text>
                                <Text style={{ fontSize: 12 }}>{item.date}</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 12, padding: 5 }}>{item.content}</Text>
                            </View>
                            <View style={{ position: "absolute", bottom: 0, right: 0, marginBottom: 5, marginRight: 5 }}>
                                <TouchableOpacity>
                                    <IonIcons
                                        name='return-up-forward'
                                        size={18}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: "600",
        margin: 10,
        color: ''
    },
    dataImg: {
        width: width,

    },
    shotHeading: {
        justifyContent: "space-between"
    },
    shot: {
        width: width * 0.55,
        backgroundColor: "#ffffff",
        padding: 5,
        margin: 10,
        shadowColor: "rgba(1,1,1,1)",
        shadowOffset: {
            width: 3,
            height: 1
        },
        elevation: 2,
        shadowOpacity: 0.59,
        shadowRadius: 7,
    },
    shotHead: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
})

export default ResearchScreen