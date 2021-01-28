import { StatusBar } from 'expo-status-bar';
import  React,{useState,useRef,useEffect} from 'react';
import { Animated,StyleSheet,Dimensions,TouchableOpacity, Text,FlatList, View } from 'react-native';
import {Barra} from './barra'
import {scroll} from './heart'
import {AddButton} from "../constants/buttons/add"
export  function Home({navigation}) {
  

  return (
    <View style={styles.container}>
      <Barra func={()=>navigation.openDrawer()} />

      <View style={{justifyContent:'flex-start',flex:1}}>
        <AddButton func={()=>navigation.navigate('Heart')}/>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    justifyContent: 'flex-start',
  },
});
