import { StatusBar } from 'expo-status-bar';
import  React,{useState,useRef,useEffect} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Animated,StyleSheet,FlatList,RefreshControl,Alert,Dimensions,TouchableOpacity,Modal, Text, View } from 'react-native';
import {Barra} from './barra'
import {ValidarHep2} from './hep'
import {Picker} from '@react-native-picker/picker';

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
export  function Heart({navigation}) {
  function scroll(){
    if(refreshing){
      flatListRef.scrollToIndex({index:0})
    }
    
  };
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    
    console.log(flatListRef)
    
    wait(2000).then(() => {

      
      setRefreshing(false)});
    
  }, []);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const scale = useRef(new Animated.Value(1)).current;
  const [scroll2,setscroll]=useState(0);
  const [hep,sethep]=useState(0.145);
  const[flatListRef,setflat]=useState();
  const [response,setresponse]=useState([]);
  const [avanc,setavanc]=useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  

  const Avancar=()=>{
    if(avanc){
      return(
        <TouchableOpacity onPress={()=>setModalVisible1(!modalVisible1)} styles={{marginVertical:"10%",width:"100%"}}>
          <Text style={{fontSize:30,marginVertical:"14%",paddingLeft:"55%",justifyContent:"flex-end"}}>Avançar</Text>
        </TouchableOpacity>
        
      )
    }else{
      return(
        <Text style={{opacity:0}}></Text>
      )
    }
  }

  
  useEffect((event)=>{
    
    const unsubscribe = navigation.addListener('focus',  () => {
      
      
      scroll(flatListRef,1)
      setavanc(false)
      onRefresh()
      setresponse([])
      sethep(0)
      
      

    });
    
    return unsubscribe
  },)
  useEffect(()=>{
    console.log(response)
    ValidarHep2(response,sethep,setepc2,epc)
    console.log(hep)
    
  },[response])
  const [epc2,setepc2]=useState([])
  const [epc,setepc]=useState([
    {epc:'Não Familiar com a Situação',key:'1',fator:17},
    {epc:'Pouco tempo disponível para recuperação',key:'2',fator:11},
    {epc:'Baixo FEEDBACK aos disturbios de sinais ',key:'3',fator:10},
    {epc:'Existe excesso ou exagero de informação, ou sobre características muito facéis',key:'4',fator:9},
    {epc:'Baixa usabilidade da informação dada - Dificuldade de assimilação da informação (espacial e funcionalmente)',key:'5',fator:8},
    {epc:'Desencontro do Modelo Mental do executante com o design do real',key:'6',fator:8},
    {epc:'Baixa recuperação das ações não intencionais',key:'7',fator:8},
    {epc:'Sobrecarga em um canal dos sentidos (informação enviada a visão, audição,…)',key:'8',fator:6},
    {epc:'Existe Demanda por uma ação de resposta contrária a uma projeto dominante do sistema',key:'9',fator:6},
    {epc:'Baixo Feedback ao executante de falhas cometidas',key:'10',fator:4},
    {epc:'Inexperiencia do executante ',key:'11',fator:3},
    {epc:'Baixa Qualidade da informação e comunicação ',key:'12',fator:3},
    {epc:'Existem conflitos na mente do executante entre objetivos imediatos e de longo prazo',key:'13',fator:2.5},
    {epc:'Desencontro entre o nível do conhecimento do executante e as demandas da tarefa',key:'14',fator:2},
    {epc:'Falta de simulação da tarefa antes de realizar - Pouca oportunidade para exercitar corpo e mente para a tarefa',key:'15',fator:1.8},
    {epc:'Instrumentação pouco confiável',key:'16',fator:1.8},
    {epc:'Alocação de funções e responsabilidades não é clara',key:'17',fator:1.6},
  ])
  
  
  const scaleon = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.sequence([Animated.timing(scale, {
      toValue: 0.9,
      duration: 200,
      
      useNativeDriver: true
    }),
    Animated.timing(scale, {
        toValue: 1,
        duration: 200,
        
        useNativeDriver: true
      })
    ]).start()
    
  };
  const scaleoff = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(scale, {
      toValue: 1,
      duration: 100,
      
      useNativeDriver: true
    }).start();
  };
  
  const [quiz,setquiz]=useState([
    {key:'1',question:'Habilidade requerida',alternatives:['Alta','Média','Baixa']},
    {key:'2',question:'Qualidade dos procedimentos escritos',alternatives:['Não existe','Difícil utilização','Boa qualidade']},
    {key:'3',question:'Nível de supervisão',alternatives:['Não existe verificação','Existe presencialmente','Alguma verificação']},
    
    {key:'4',question:'Familiaridade com a tarefa',alternatives:['Baixa','Média','Alta']},
    {key:'5',question:'Auxilio da automação (Ações e alarmes)',alternatives:['Não existe','Existe ação da automação','Existe alarme e ação da automação']},
       
    {key:'6',question:'Tem consciência dos efeitos?',alternatives:['Sim','Não']},
    {key:'7',question:'Complexidade da tarefa',alternatives:['Baixa','Média','Alta']},
    {key:'8',question:'Nível de concentração exigida na tarefa',alternatives:['Alta','Média','Baixa']},
    {key:'9',question:'Adequação da tarefa ao ser humano',alternatives:['Inadequado','Com tempo adequado','Com tempo e distribuição adequados']},
    {key:'10',question:'Treinamento',alternatives:['Pessoas altamente treinadas','Pessoas com algum treinamento','Pessoas sem treinamento']},
    {key:'11',question:'Experiência',alternatives:['Tem experiência','Não tem experiência']},
    {key:'12',question:'Motivação',alternatives:['Alta','Média','Baixa']},
    
    
    
    
  ])

  return (
    <View style={styles.container}>
      
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible1}
         
        >
          
            <View style={{flex:0.5}}>

            </View>
            <View style={{flex:8,backgroundColor:"white",elevation:20,borderRadius:10,width:"100%"}}>
              <View style={{marginHorizontal:"7%",flex:1}}>
                <TouchableOpacity  onPress={()=>setModalVisible1(!modalVisible1)}>
                 <Text style={{fontSize:40,color:"gray"}}>x</Text>
                </TouchableOpacity>
                <View style={{marginVertical:"6%",borderBottomWidth:1,borderColor:"black"}}>
                  <Text style={{fontSize:15,fontWeight:"bold"}}>{"Condições de produção de erros  P(A)="+(hep*100).toFixed((hep.toString().length)*0.5)+"%"}</Text>
                </View>
                
              </View>
              <View style={{flex:4}}>
                <View style={{borderBottomWidth:1,borderColor:"black",marginBottom:"5%",marginHorizontal:"2%"}}>
                  <Text style={{marginHorizontal:"5%",fontSize:15}}>Identifique os EPC - Error Producing Conditions </Text>
              

                </View>

                
                <FlatList 
                  data={epc}
                  
                  keyExtractor={(item,index)=>index}
                  renderItem={({item})=>(
                    <TouchableOpacity style={{justifyContent:"center",alignItems:"center",elevation:3,marginVertical:"1%",marginHorizontal:"5%",width:"90%",height:60,backgroundColor:"white"}}>
                      <Text style={{paddingLeft:"4%",fontSize:15,color:"gray"}}>{item.epc}</Text>
                    </TouchableOpacity>

                  )

                  }
                
                />

              </View>
              <View style={{flex:0.4,alignItems:"flex-end"}}>
                <TouchableOpacity>
                  <Text style={{marginHorizontal:"5%",fontSize:30}}>
                    Avancar
                  </Text>
                </TouchableOpacity>
              </View>
              

            </View>

          
          
        </Modal>

      
      
      <Barra func={()=>navigation.openDrawer()}/>
      <TouchableOpacity onPress={scroll()}>
        <Text style={{opacity:0,fontSize:30}}>Aperte para voltar</Text>
      </TouchableOpacity>
      <FlatList
        
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ref={(ref)=>{setflat(ref)}}
        data={quiz}
        
        scrollEnabled={false}
        initialScrollIndex={0}
        getItemLayout={(data, index) => (
          {length:windowHeight, offset: windowWidth*index, index}
        )}
        onMomentumScrollBegin={()=>scaleon()}
        horizontal
        onScroll={(event)=>{
          
          const div=event.nativeEvent.contentOffset.x/event.nativeEvent.layoutMeasurement.width
          const roundIndex = Math.round(div)
          if(roundIndex>=quiz.length-1){
            setscroll('ok')
          }else{
            setscroll(roundIndex)
          }
          
          
          

        
       
        }}
        
        
        
        pagingEnabled
        keyExtractor={(item)=>item.key}
        renderItem={({item})=>(
          
          <View style={{width:windowWidth,alignItems:'center'}}>
            
            <Animated.View style={{elevation:12,width:windowWidth*0.95,alignItems:'center',marginTop:10,height:windowHeight-120,backgroundColor:'white',borderRadius:20,transform:[{scale}]}}>
              <View style={{marginTop:'20%',marginBottom:50}}>
                <Text style={{color:'gray',textAlign:'center',fontSize:25,fontWeight:'200'}}>{item.question}</Text>
              </View>
              
              <FlatList 
                data={item.alternatives}
                ListFooterComponent={
                  <>
                  
                    <Avancar />
                  
                    
                  </>
                }
                initialNumToRender={10}
                keyExtractor={(item)=>item}
                renderItem={({item,index})=>(
                  <TouchableOpacity onPress={()=>{
                    scaleon();
                    setresponse([...response,item]);
                    

                    
                    if(scroll2!='ok')
                    {flatListRef.scrollToIndex({index:scroll2+1})}else{
                      console.log("Cabou");
                      ValidarHep2(response,sethep,setepc2,epc);
                      setavanc(true);
                      
                    }
                    
                    }}  style={{width:windowWidth*0.8,marginVertical:'4%',flexDirection:'row',borderRadius:40,borderWidth:1,height:60,alignItems:'center',backgroundColor:'white'}}>
                    <View style={{borderRadius:60,borderWidth:1,width:45,justifyContent:'center',alignItems:'center',height:45,left:5,backgroundColor:'white'}}><Text>{index}</Text></View>
                    <Text style={{marginLeft:"5%",fontSize:20}}>{item}</Text>
                  </TouchableOpacity>
                )}
              
              />

            </Animated.View>  
          </View>

        )}
      
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height
  },
});
