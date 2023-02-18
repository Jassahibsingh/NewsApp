import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import FeedScreen from './screens/FeedScreen';
import PortfolioScreen from './screens/PortfolioScreen';
import MarketScreen from './screens/MarketScreen';
import ProfileScreen from './screens/ProfileScreen';

//Screen names
const feed = 'Feed';
const portfolio = 'PortFolio';
const market = 'Market';
const profile = 'Profile';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={feed}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === feed) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === portfolio) {
              iconName = focused ? 'list' : 'list-outline';
            } else if (rn === market) {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (rn === profile) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        })}
        tabBarOptions={{
          activeTintColor: '#e432c1',
          inactiveTintColor: 'grey',
          labelStyle: {paddingBottom: 10, fontSize: 10},
          style: {padding: 10, height: 70},
        }}>
        <Tab.Screen name={feed} component={FeedScreen} />
        <Tab.Screen name={market} component={MarketScreen} />
        <Tab.Screen name={portfolio} component={PortfolioScreen} />
        <Tab.Screen name={profile} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
