import { StatusBar } from 'expo-status-bar';
import  React,{useState,useRef,useEffect} from 'react';
import { Animated,StyleSheet,Dimensions,TouchableOpacity, Text,FlatList, View } from 'react-native';
import {Barra} from './barra'


export  function Resultados({navigation,route}) {
    const { response, quiz,hep,prob,confiabH} = route.params;
    const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={styles.container}>
        <View style={{flex:1}}>
            <Barra func={()=>navigation.openDrawer()} />
        </View>
      
      <View style={{flex:3}}>
        <FlatList 
            ListHeaderComponent={
              <>
                <View style={{justifyContent:"center",alignItems:"center",marginBottom:"25%"}}>
                  <Text style={{fontSize:30}}>{(hep*100).toFixed(0)+"%"}</Text>
                  
                  <Text style={{fontSize:30}}>{(confiabH()*100).toFixed(2)+"%"}</Text>
                </View>
                
              </>
            }
            data={response}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item,index})=>(
                <View>

                    <Text style={{fontSize:20}}>{quiz[index]["question"]+" "+item}</Text>
                </View>
            )

            }
        
        />



      </View>
      <View style={{flex:1}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Heart')}>
           <Text style={{fontSize:30}}>Nova consulta</Text>
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
