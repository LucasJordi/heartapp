import { StatusBar } from 'expo-status-bar';
import  React,{useState,useRef,useEffect} from 'react';
import { Animated,StyleSheet,Dimensions,TouchableOpacity, Text,FlatList, View } from 'react-native';
import {Barra} from './barra'


export  function Home({navigation}) {
  

  return (
    <View style={styles.container}>
      <Barra func={()=>navigation.openDrawer()} />
      <View style={{alignItems:'center',justifyContent:'center',height:500}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Heart')}} style={{alignItems:'center',justifyContent:"center",borderRadius:150,backgroundColor:'white',elevation:40,width:150,height:150}}>

          <Text style={{fontSize:40}}>Iniciar</Text>

        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
