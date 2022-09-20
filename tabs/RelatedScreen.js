import React, { useRef } from "react";
import { View, Button, Dimensions, Pressable, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import IonIcon from 'react-native-vector-icons/Ionicons';
// const dummy_set = require("./dummy_set3.json");

const width = Dimensions.get('screen').width

export default function RelatedScreen() {
    const refRBSheet = useRef();

    const dummy_set = [
        { headline: "Liz Truss will be UK’s next Prime Minister?", uri: require("../images/lizTruss.png") },
        { headline: "British Pound will fall after Prime Minister elections?", uri: require("../images/uk.png") },
        { headline: "British Railway Strikes will end by before Sept. 2022?", uri: require("../images/railway.png") },
        { headline: "Liz Truss will be UK’s next Prime Minister?", uri: require("../images/lizTruss.png") },
        { headline: "British Pound will fall after Prime Minister elections?", uri: require("../images/uk.png") },
        { headline: "British Railway Strikes will end by before Sept. 2022?", uri: require("../images/railway.png") },
    ];

    return (
        <View>
            <Pressable onPress={() => refRBSheet.current.open()}>
                <View>
                    {
                        dummy_set.slice(0, 2).map((item) => (
                            <View style={{ margin: 10, flexDirection: "row", width: width * 0.6 }}>
                                <Image
                                    source={item.uri}
                                    style={{ borderBottomLeftRadius: 12, borderTopLeftRadius: 12, width: width * 0.2, height: width * 0.2 }}
                                />
                                <Text style={{ fontSize: 18, fontWeight: "400", margin: 12, color: "black" }}>{item.headline}</Text>
                            </View>
                        ))

                    }
                </View>
                <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    // closeDuration={1}
                    animationType={'slide'}
                    customStyles={{
                        wrapper: {
                            backgroundColor: "transparent",
                        },
                        draggableIcon: {
                            backgroundColor: "#d9d9d9",
                            width: width * 0.2
                        },
                        container: {
                            height: width * 1.22,
                        }
                    }}
                >
                    <View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: 15, marginTop: 0 }}>
                            <Text style={{ fontSize: 22, fontWeight: "600", }}>Related</Text>
                            <IonIcon
                                onPress={() => refRBSheet.current.close()}
                                name='close-circle'
                                size={27}
                                style={{
                                    color: "black"
                                }}
                            />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", width: width * 0.38, margin: 10, marginLeft: 15 }}>
                            <View style={{ backgroundColor: "#2b2828", width: width * 0.15, justifyContent: "center", alignItems: "center", borderRadius: 30, height: width * 0.06 }}>
                                <Text style={{ color: "white", fontSize: 15, fontWeight: "600" }}>Top</Text>
                            </View>
                            <View style={{ backgroundColor: "#7d7d7d", width: width * 0.2, justifyContent: "center", alignItems: "center", borderRadius: 30, height: width * 0.06 }}>
                                <Text style={{ color: "white", fontSize: 15, fontWeight: "600" }}>Newest</Text>
                            </View>
                        </View>
                        <ScrollView>
                            <TouchableOpacity activeOpacity={1}>
                                {
                                    dummy_set.map((item) => (
                                        <View style={{ margin: 10, flexDirection: "row", width: width * 0.6 }}>
                                            <Image
                                                source={item.uri}
                                                style={{ borderBottomLeftRadius: 12, borderTopLeftRadius: 12, width: width * 0.2, height: width * 0.2 }}
                                            />
                                            <Text style={{ fontSize: 18, fontWeight: "400", margin: 12, color: "black" }}>{item.headline}</Text>
                                        </View>
                                    ))
                                }
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </RBSheet>
            </Pressable>
        </View>
    );
}