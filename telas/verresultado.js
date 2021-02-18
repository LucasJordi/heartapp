import { StatusBar } from 'expo-status-bar';
import  React,{useState,useRef,useEffect} from 'react';
import { Animated,StyleSheet,Dimensions,Alert,SafeAreaView,ScrollView,LogBox,TouchableOpacity, Text,FlatList, View } from 'react-native';
import Svg,{Circle,G} from "react-native-svg"
import {Barra} from './barra'
import {firebase} from '../config/firebase'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export  function VerResultados({navigation,route}) {


    const { item} = route.params;
    const a=item.epc2.filter((a)=>item.current.includes(a.key));
    const [novo,setnovo]=useState(item.epc2.filter((a)=>item.current.includes(a.key)))
    const [q1,setq1]=useState([]);
    function store() {
      firebase
        .database()
        .ref('views/')
        .push({
          func,
          tarefa, 
          quiz,
          hep,
          newepc,
          epc2,
          current
          
        });
        LogBox.ignoreLogs(['Setting a timer']);
    }
    
    useEffect((event)=>{
      const unsubscribe = navigation.addListener('focus',  () => {



        setq1(item.quiz);
        



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
            <Text style={{fontSize:25,fontWeight:"bold"}}>{"Tarefa: "+item.tarefa}</Text>
            <Text style={{fontSize:25,fontWeight:"bold"}}>{"Função: "+item.func}</Text>

          </View>
          <View style={{marginVertical:"6%",marginHorizontal:"2%",borderBottomWidth:1,borderColor:"black"}}>
            <Text style={{fontSize:18,fontWeight:"bold"}}>{"Condições de produção de erros  P(A)="+((item.hep*100).toFixed((item.hep.toString().length)*0.5).toString().replace(".",","))+"%"}</Text>

          </View>




            <View style={{justifyContent:"center",flex:10}}>
              <FlatList
                ListHeaderComponent={
                  <>

                    <View style={{borderBottomWidth:1,borderColor:"black",justifyContent:"center",alignItems:"center",marginBottom:"5%",marginHorizontal:"2%"}}>
                      <Text style={{fontWeight:"bold"}}>Resultado:</Text>
                      <View style={{marginVertical:"3%",width:120,height:120,borderRadius:60,borderColor:"blue",justifyContent:"center",alignItems:"center",borderWidth:10,}}>
                      <Text style={{fontWeight:"bold",textAlign:"center",fontSize:25}}>{((produtorio()*item.hep*100).toFixed(2).toString().replace(".",","))+"%"}</Text>
                      </View>

                      <View style={{justifyContent:"center",alignItems:"center"}}>
                        {novo.map((child,index)=>{
                          return(<View style={{justifyContent:"center",alignItems:"center",marginVertical:"1%"}} key={index}>

                            <Text style={{fontWeight:"bold"}}>
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
                    <View style={{alignItems:"stretch", marginVertical:"5%",marginHorizontal:"2%"}}></View>
                    
                  </>
                }
                showsVerticalScrollIndicator={false}
                data={item.quiz}
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
