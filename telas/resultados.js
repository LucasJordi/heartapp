import { StatusBar } from 'expo-status-bar';
import  React,{useState,useRef,useEffect} from 'react';
import { Animated,StyleSheet,Dimensions,SafeAreaView,ScrollView,TouchableOpacity, Text,FlatList, View } from 'react-native';
import Svg,{Circle,G} from "react-native-svg"
import {Barra} from './barra'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export  function Resultados({navigation,route}) {
    
   
    const { response,func,tarefa, quiz,hep,newepc,epc2,current} = route.params;
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
        <View style={{flex:1,}}>
            <Barra func={()=>navigation.openDrawer()} />
        </View>
        <View style={{flex:5}}>
          <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text style={{fontSize:25,fontWeight:"bold"}}>{"Tarefa: "+tarefa}</Text>
            <Text style={{fontSize:25,fontWeight:"bold"}}>{"Função: "+func}</Text>

          </View>
          <View style={{marginVertical:"6%",marginHorizontal:"2%",borderBottomWidth:1,borderColor:"black"}}>
            <Text style={{fontSize:18,fontWeight:"bold"}}>{"Condições de produção de erros  P(A)="+(hep*100).toFixed((hep.toString().length)*0.5)+"%"}</Text>
            
          </View>
          
            
            

            <View style={{justifyContent:"center",flex:10}}>
              <FlatList
                ListHeaderComponent={
                  <>
                    
                    <View style={{borderBottomWidth:1,borderColor:"black",justifyContent:"center",alignItems:"center",marginBottom:"5%",marginHorizontal:"2%"}}>
                      <Text style={{fontWeight:"bold"}}>Resultado:</Text>
                      <View style={{marginVertical:"3%",width:120,height:120,borderRadius:60,borderColor:"tomato",justifyContent:"center",alignItems:"center",borderWidth:10,}}>
                      <Text style={{fontWeight:"bold",textAlign:"center",fontSize:25}}>{(produtorio()*hep*100).toFixed(3)+"%"}</Text>
                      </View>
                      
                      <View style={{justifyContent:"center",alignItems:"center"}}>
                        {novo.map((child,index)=>{
                          return(<View style={{justifyContent:"center",alignItems:"center"}} key={index}>

                            <Text>
                              {child.epc}
                            </Text>
                          </View>)

                        })}
                      </View>
                    </View>
                    
                  </>
                }
                ListFooterComponent={
                  <>
                    
                  </>
                }
                showsVerticalScrollIndicator={false}
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
