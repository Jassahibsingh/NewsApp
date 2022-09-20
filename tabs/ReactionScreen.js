import React from 'react'
import { View, Text, Dimensions, Image, TextInput, StyleSheet, Button, Pressable, ScrollView, TouchableOpacity } from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
const dummy_Set = require('./dummy_set2.json')

const width = Dimensions.get('screen').width;

const ReactionScreen = () => {
    const refRBSheet = React.useRef();

    const [text, onChangeText] = React.useState(null);

    return (
        <View>
            <Pressable onPress={() => refRBSheet.current.open()}>

                <View style={{ justifyContent: "space-between", flexDirection: "row", width: width * 0.41, margin: 10, marginLeft: 20, alignItems: "center" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                        <MCIcons
                            name='comment-account-outline'
                            size={28}
                        />
                        <Text style={{ marginLeft: 5, fontSize: 20 }}>215</Text>
                    </View>
                    <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                        <EvilIcon
                            name='comment'
                            size={29}
                        />
                        <Text style={{ marginLeft: 5, fontSize: 20 }}>95K</Text>
                    </View>
                </View>
                <View>
                    {
                        dummy_Set.slice(0, 2).map((item, index) => (
                            <View style={{ margin: 10, marginLeft: 15, width: width * 0.7, flexDirection: "row" }}>
                                <Image
                                    source={require(`../images/linda.png`)}
                                    style={{ borderRadius: 50, borderWidth: 2, borderColor: "grey", width: 40, height: 40 }}
                                />
                                <Text style={{ fontWeight: "800", color: "#3f3f3f", marginLeft: 10 }}>{item.name}</Text>
                                <Text style={{ fontWeight: "500", color: "#3f3f3f", marginLeft: 10 }}>{item.content}</Text>
                            </View>
                        ))
                    }
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Add a Comment"
                    />
                </View>
                <View>
                    {/* <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} /> */}
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
                                <Text style={{ fontSize: 22, fontWeight: "600", }}>Reactions</Text>
                                <IonIcon
                                    onPress={() => refRBSheet.current.close()}
                                    name='close-circle'
                                    size={27}
                                    style={{
                                        color: "black"
                                    }}
                                />
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", width: width * 0.38, margin: 5, marginLeft: 15 }}>
                                <View style={{ backgroundColor: "#2b2828", width: width * 0.15, justifyContent: "center", alignItems: "center", borderRadius: 30, height: width * 0.06 }}>
                                    <Text style={{ color: "white", fontSize: 15, fontWeight: "600" }}>Top</Text>
                                </View>
                                <View style={{ backgroundColor: "#7d7d7d", width: width * 0.2, justifyContent: "center", alignItems: "center", borderRadius: 30, height: width * 0.06 }}>
                                    <Text style={{ color: "white", fontSize: 15, fontWeight: "600" }}>Newest</Text>
                                </View>
                            </View>
                            <View style={{ margin: 10 }}>
                                <Text style={{ fontSize: 13, color: '#5d5d5d', fontWeight: "600" }}>Remember to keep comments respectful and to follow our </Text>
                                <Text style={{ color: '#5f9dfb' }}>Community Guidelines</Text>
                            </View>
                            <View style={{ marginLeft: 15, flexDirection: "row" }}>
                                <Image
                                    source={require('../images/myImg.png')}
                                />
                                <TextInput
                                    style={{ marginLeft: 10 }}
                                    onChangeText={onChangeText}
                                    value={text}
                                    placeholder="Add a Comment"
                                />
                            </View>
                            <ScrollView>
                                <TouchableOpacity activeOpacity={1}>
                                    {
                                        dummy_Set.map((item, index) => (
                                            <View style={{ margin: 10, }}>
                                                <View style={{ flexDirection: "row", }}>
                                                    <Image
                                                        source={require('../images/linda.png')}
                                                        style={{ borderRadius: 50 }}
                                                    />
                                                    <Text style={{ color: "black", fontSize: 15, fontWeight: "500", marginLeft: 10, marginRight: 10 }}>{item.name}</Text>
                                                    <Text style={{ color: "black" }}>{item.time}</Text>
                                                </View>
                                                <Text style={{ marginLeft: width * 0.12, color: "black" }}>{item.content}</Text>
                                            </View>
                                        ))
                                    }
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </RBSheet>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        // borderWidth: 1,
        marginLeft: width * 0.2,
        height: 35
    },
})

export default ReactionScreen