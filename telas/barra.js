import { StatusBar } from 'expo-status-bar';
import  React,{useState,useRef,useEffect} from 'react';
import { Animated,StyleSheet,Dimensions,Image,TouchableOpacity, Text,FlatList, View } from 'react-native';


export  function Barra({navigation,func}) {
  const margin = useRef(new Animated.Value(8)).current
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const marg=()=>{
    Animated.sequence([
      Animated.timing(margin,
        {
          toValue:0,
          duration:100,
          useNativeDriver:false
        }        
        ),
        Animated.timing(margin,
          {
            toValue:8,
            duration:100,
            useNativeDriver:false
          }        
          ),

    ]).start()
  }
  return (
    
    <View style={{backgroundColor:'#12283d',width:windowWidth,justifyContent:'center',height:100,borderBottomRightRadius:2,borderBottomLeftRadius:2}}>
      <TouchableOpacity onPress={()=>{
        
        marg();
        {func()}}} style={{marginLeft:'5%'}}>
        <View style={{width:30,height:2,borderRadius:10,backgroundColor:"white"}}></View>
        <Animated.View style={{width:30,marginVertical:margin,height:2,borderRadius:10,backgroundColor:"white"}}></Animated.View>
        <View style={{width:30,height:2,borderRadius:10,backgroundColor:"white"}}></View>

      </TouchableOpacity>
    
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
