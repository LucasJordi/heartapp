import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {Heart} from './telas/heart'
import {Home} from './telas/home'
import {Resultados} from './telas/resultados'
import {VerResultados} from './telas/verresultado'
import {CustomDrawerContent} from './constants/drawer/drawer'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} />}>

        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Heart" component={Heart} />
        <Drawer.Screen name="Resultados" component={Resultados} />
        <Drawer.Screen name="Ver Resultados" component={VerResultados} />
        


      </Drawer.Navigator>
    </NavigationContainer>
  );
}
