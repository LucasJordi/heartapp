import { StatusBar } from 'expo-status-bar';
import  React,{useState,useEffect} from 'react';
import { Animated,StyleSheet,Dimensions,TouchableOpacity, Text,FlatList,LogBox, View } from 'react-native';
import {Barra} from './barra'
import {scroll} from './heart'
import {AddButton} from "../constants/buttons/add"
import {firebase} from '../config/firebase'
export  function Home({navigation}) {
  const [dados,setDados]=useState([])
  const buscarDados=async ()=>{
    try{
      
      
      await firebase.database().ref('views/').on('value', (snapshot) => {
        const li=[]
        
        
        snapshot.forEach((child)=>{
          li.push({id:child.key,current:child.val().current,epc2:child.val().epc2,func:child.val().func,hep:child.val().hep,quiz:child.val().quiz,tarefa:child.val().tarefa})
          console.log(child.key)
        })
        setDados(li);
        
      });
      
      LogBox.ignoreLogs(['Setting a timer']);
      LogBox.ignoreLogs(['Encountered two children with the same key']);
      
      console.log(dados);
    }catch(e){
      console.log("Erro buscar dados Home"+e)
    }
  }
  useEffect(()=>{
    buscarDados()
  },[firebase])
  

  return (
    <View style={styles.container}>
      <Barra func={()=>navigation.openDrawer()} />

      <View style={{justifyContent:'flex-start',flex:1}}>
        <AddButton func={()=>navigation.navigate('Heart')}/>

      </View>
      <View style={{flex:5,alignItems:"stretch",marginHorizontal:"1%"}}>
        <View style={{marginBottom:"5%"}}>

        </View>
        <FlatList 
          
          data={dados}
          
          
          renderItem={({item})=>(
            <TouchableOpacity onPress={()=>navigation.navigate('Ver Resultados',{item})} style={[styles.shadow,{height:90,alignItems:"center",backgroundColor:"white",marginBottom:"5%",flexDirection:"row",borderRadius:10,borderWidth:1,borderColor:"#cccccc55"}]}>
              
              <View style={styles.view}>
                <View style={{height:70,width:70,borderWidth:10,borderColor:"#3f4b79ff",borderRadius:35}}>

                </View>
              </View>
              <View>               
                <Text style={styles.text}>
                  {'Tarefa: '+item.tarefa}
                </Text>
                <Text style={styles.text}>
                  {'Função: '+item.func}
                </Text>
              </View> 
            </TouchableOpacity>
          )}
          keyExtractor={index => index.toString()}
        
        
        />

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
  shadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.40,
    shadowRadius: 30.00,

    elevation: 5,
  },
  view:{
    marginHorizontal:"2%"
  },
  text:{
    fontWeight:"bold",
    color:"gray",
    fontSize:20
  }
});
