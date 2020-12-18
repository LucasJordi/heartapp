import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {Heart} from './telas/heart'
import {Home} from './telas/home'


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Heart" component={Heart} />
        
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}