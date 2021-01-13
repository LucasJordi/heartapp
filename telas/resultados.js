import { StatusBar } from 'expo-status-bar';
import  React,{useState,useRef,useEffect} from 'react';
import { Animated,StyleSheet,Dimensions,SafeAreaView,ScrollView,TouchableOpacity, Text,FlatList, View } from 'react-native';

import {Barra} from './barra'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export  function Resultados({navigation,route}) {
    
   
    const { response, quiz,hep,newepc,epc2,current} = route.params;
    const a=epc2.filter((a)=>current.includes(a.key));
    const [novo,setnovo]=useState(epc2.filter((a)=>current.includes(a.key)))
    const [q1,setq1]=useState([]);
    useEffect((event)=>{
      const unsubscribe = navigation.addListener('focus',  () => {
      
        
        
        setq1(quiz);
        console.log(newepc);
        
        
  
      });
      return unsubscribe
    })
    const produtorio=  ()=>{
      var total=1
       try{novo.forEach((element, index, array) => {
        total=total*((element.escolha*(element.fator-1))+1)
        console.log((element.escolha*(element.fator-1))+1)
        
      });
      console.log(total)
      return total
     }catch(e){
       console.log(e)
     }
      
      
    }
  
  return (
    <SafeAreaView style={styles.container}>
        <View style={{flex:1}}>
            <Barra func={()=>navigation.openDrawer()} />
        </View>
        <View style={{flex:5}}>
          <View style={{marginVertical:"6%",marginHorizontal:"2%",borderBottomWidth:1,borderColor:"black"}}>
            <Text style={{fontSize:18,fontWeight:"bold"}}>{"Condições de produção de erros  P(A)="+(hep*100).toFixed((hep.toString().length)*0.5)+"%"}</Text>
          </View>
          
            <TouchableOpacity onPress={()=>console.log(novo)} style={{borderBottomWidth:1,borderColor:"black",alignItems:"center",marginBottom:"5%",marginHorizontal:"2%"}}>
              <Text style={{marginHorizontal:"5%",fontSize:20}}>Dados</Text>
                        
                           

            </TouchableOpacity>
            <View style={{alignItems:"flex-start",height:"70%",width:windowWidth}}>
              <FlatList
                ListFooterComponent={
                  <>
                    <View style={{alignItems:"center"}}>
                      <Text>Resultado:</Text>
                    
                      <Text>{produtorio()*hep}</Text>

                      
                    </View>
                  </>
                }
                data={quiz}
                keyExtractor={(item,index)=>index+item}
                renderItem={({item,index})=>(
                  <View style={{marginHorizontal:"3%"}} >

                    <Text style={{fontWeight:"bold"}}>{item.question}</Text>
                    <Text style={{marginHorizontal:"5%"}}>{item.resposta}</Text>
                  </View>
                )}
              
              />
            </View>
           
            

          

        </View>
     
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width:windowWidth
  },
});
