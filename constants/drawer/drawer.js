import React,{useState,useRef, useContext} from 'react';
import { createDrawerNavigator,DrawerItem,DrawerContentScrollView,
DrawerItemList,
} from '@react-navigation/drawer';

import { View,StyleSheet,NativeModules,Alert,Animated,Text,Image,TouchableOpacity} from 'react-native';

export function CustomDrawerContent({props,navigation}) {

    return (
      <DrawerContentScrollView {...props}>
        <View style={{marginLeft:"5%",marginVertical:"5%"}}>
          <TouchableOpacity style={styles1.menu}>


            <Text style={styles1.text}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles1.menu}>
            
            <Text style={styles1.text}>Consulta</Text>
          </TouchableOpacity>



        </View>

      </DrawerContentScrollView>
    );
  }

export function NewDrawer(){
  return(
  <ArmazenamentoProvider>
    <CustomDrawerContent />
  </ArmazenamentoProvider>)
}


  export const styles1 = StyleSheet.create({

    menu: {
      alignItems:"center",
      height:50,
      borderColor:"#e6e6e6ff",
      borderBottomLeftRadius:10,
      borderTopLeftRadius:10,
      marginTop:"1%",
      flexDirection:"row",
      borderWidth:1






    },
    text:{
      paddingLeft:"2%",
      fontWeight:"bold",
      fontSize:20

    }

  });
