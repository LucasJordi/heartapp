import { StatusBar } from 'expo-status-bar';
import  React,{useState,useRef,useEffect} from 'react';
import { Animated,StyleSheet,Dimensions,TouchableOpacity, Text,FlatList, View } from 'react-native';
import {Barra} from './barra'


export  function Resultados({navigation,route}) {
    const { response, quiz } = route.params;

  return (
    <View style={styles.container}>
        <View style={{flex:1}}>
            <Barra func={()=>navigation.openDrawer()} />
        </View>
      
      <View style={{flex:3}}>
        <FlatList 
            data={response}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item,index})=>(
                <View>

                    <Text style={{fontSize:25}}>{quiz[index]["question"]+" "+item}</Text>
                </View>
            )

            }
        
        />


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
