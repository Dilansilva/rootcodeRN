import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';



//Screens
import LoginPage from './screens/LoginPage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    // <Stack.Navigator>
    //   <Stack.Screen name="Login" component={LoginPage} />
    //   <NavigationContainer>
    //     <Tab.Navigator>
    //       <Tab.Screen name="Login" component={LoginPage} />
    //       <Tab.Screen name="Home" component={LoginPage} />
    //       <Tab.Screen name="Home" component={LoginPage} />
    //     </Tab.Navigator>
    //   </NavigationContainer>
    // </Stack.Navigator>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage}/>

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
