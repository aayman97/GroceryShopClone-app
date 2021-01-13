import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddToBasket from './Screens/AddToBasket';
import Grocery from './Screens/Grocery';
import Home from './Screens/Home';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Provider} from 'react-redux'
import { store } from './Redux/Store';
import Intro from './Screens/Intro';

const stack = createStackNavigator()

export default function App() {
  
  return (
     <NavigationContainer>
       <Provider store ={store}>
       <stack.Navigator screenOptions ={{headerShown : false}}>
         <stack.Screen name = 'Inro' component ={Intro}/>
         <stack.Screen name = 'Home' component ={Home} options ={{gestureEnabled : false}}/>
         <stack.Screen name = 'Grocery' component ={Grocery} />
         <stack.Screen name ='Basket' component ={AddToBasket}/>
       </stack.Navigator>
       </Provider>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
