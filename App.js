import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';



//Screens
import LoginPage from './screens/LoginPage';
import Home from './screens/Home'
import Explore from './screens/Explore';
import Library from './screens/Library';
import {AsyncStorage} from 'react-native';
import Details from './screens/Details';
import { useEffect, useState } from 'react';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



function HomeScreen() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Explore" component={Explore}/>
      <Tab.Screen name="Library" component={Library}/>
    </Tab.Navigator>
  );
}

export default function App() {
  const [token,setToken] = useState(null);
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        // We have data!!
        console.log(value,"klnknknknk");
      }
      setToken(value)
    } catch (error) {
      // Error retrieving data
    }
  };

  useEffect(() => {
    retrieveData()
  },[]);
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        
          <Stack.Screen name="HomeScreen" component={HomeScreen}/> 
           <Stack.Screen name="Login" component={LoginPage}/>
           <Stack.Screen name="Details" component={Details}/>
        
          
        
       

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
});
