import { React, useCallback, useEffect, useState, useFocusEffect } from 'react';
import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Dimensions,
    View,
    ImageBackground,
    TouchableOpacity,
    useWindowDimensions
} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import EntypoIcons from "react-native-vector-icons/Entypo";
import ResearchScreen from '../../tabs/ResearchScreen';
import RelatedScreen from '../../tabs/RelatedScreen';
import ReactionScreen from '../../tabs/ReactionScreen';

const width = Dimensions.get('screen').width;

export default function HomeScreen({ navigation }) {
    const [index, setIndex] = useState(0);
    const [routes, setRoutes] = useState([
        { key: "first", title: "Research & News" },
        { key: "second", title: "Reactions" },
        { key: "third", title: "Related" },
    ]);

    // const Tab = createMaterialTopTabNavigator();
    // const Stack = createStackNavigator();
    const layout = useWindowDimensions();

    const renderTabBar = props => {
        return (
            <View>
                <View style={styles.img}>
                    <StatusBar
                        barStyle="light-content"
                        hidden={false}
                        backgroundColor="black"
                        translucent={false}
                        networkActivityIndicatorVisible={true}
                    />
                    <ImageBackground source={require("./images/Vector.png")}
                        resizeMode={"cover"}
                        style={{ width: width, zIndex: -1, }}
                    >
                        <TouchableOpacity>
                            <EntypoIcons
                                name='forward'
                                size={25}
                                style={styles.forwardIcon}
                            />
                        </TouchableOpacity>
                        <Image
                            source={require("./images/gradient.png")}
                            style={{ width: width, zIndex: 0 }}
                        />
                        <View style={styles.imgBottom}>
                            <Text style={styles.headline}>Will China invade Taiwan
                                before end september? </Text>
                            <TouchableOpacity>
                                <EntypoIcons
                                    name='list'
                                    size={25}
                                    style={styles.filterIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                <View>
                    <Image
                        source={require("./images/portfolio.png")}
                        style={styles.portfolioImg}
                    />
                </View>

                <TabBar
                    {...props}
                    renderLabel={({ route, focused, color }) => (
                        <Text style={{ fontSize: 16, fontWeight: "800", color: focused ? "#e432c1" : "", width: "100%" }}>
                            {route.title}
                        </Text>
                    )}
                    indicatorStyle={{ backgroundColor: '#e432c1', }}
                    style={{ backgroundColor: 'white', }}
                    contentContainerStyle={{}}
                    tabStyle={{ color: '#e432c1', }}
                    pressColor={'white'}
                    pressOpacity={1}
                />
            </View>
        )
    };

    const renderScene = ({ route, jumpTo }) => {
        switch (route.key) {
            case 'first':
                return <ResearchScreen jumpTo={jumpTo} />;
            case 'second':
                return <ReactionScreen jumpTo={jumpTo} index={index} />;
            case 'third':
                return <RelatedScreen jumpTo={jumpTo} />;
        }
    };

    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    );
};

const styles = StyleSheet.create({
    img: {
        // position: "absolute",
        // flexGrow: 2,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        // height: width,
        // top: 0,
        // left: 0,
        // right: 0,
        // margin: 0,
        // padding: 0
    },
    forwardIcon: {
        position: "absolute",
        top: 0,
        right: 0,
        color: "white",
        margin: 10,
        zIndex: 1
    },
    imgBottom: {
        flexDirection: "column",
        justifyContent: "space-between",
        // alignItems: "center"
        // zIndex: 1
    },
    headline: {
        position: "absolute",
        left: 0,
        bottom: 0,
        margin: 12,
        color: "white",
        fontSize: 25,
        fontWeight: "600",
        width: width * 0.9
    },
    filterIcon: {
        color: "white",
        position: "absolute",
        right: 0,
        bottom: 0,
        marginRight: 10,
        marginBottom: 25
    },
    portfolioImg: {
        width: width
    }
});




