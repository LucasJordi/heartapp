import { StatusBar } from 'expo-status-bar';
import  React,{useState,useRef,useEffect} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Animated,StyleSheet,ActivityIndicator,FlatList,RefreshControl,Alert,Dimensions,TouchableOpacity,TouchableHighlight,Modal, Text, View } from 'react-native';
import {Barra} from './barra'
import {ValidarHep2} from './hep'
import {Picker} from '@react-native-picker/picker';
import { TextInput } from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
export  function Heart({navigation}) {
  const tela =(event)=>{
          
    const div=event.nativeEvent.contentOffset.x/event.nativeEvent.layoutMeasurement.width
    const roundIndex = Math.round(div)
    console.log(roundIndex)
  }
  const [current,setcurrent]=useState([])
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
  
  const [marc,setmarc]=useState(0)
  
  const scale = useRef(new Animated.Value(1)).current;
  const [scroll2,setscroll]=useState(0);
  const [hep,sethep]=useState(0);
  const[flatListRef,setflat]=useState();
  const [response,setresponse]=useState([]);
  const [pproduct,setpproduct]=useState();
  const [func,setFunc]=useState('');
  const [tarefa,setTarefa]=useState('');
  const [avanc,setavanc]=useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(true);
  

  const Avancar=()=>{
    if(avanc){
      return(
        <TouchableOpacity onPress={()=>setModalVisible1(!modalVisible1)} style={styles.buttom1}>
          <Text style={{fontSize:30,justifyContent:"flex-end",color:"white",fontWeight:"bold"}}>Avançar</Text>
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
      
      setModalVisible2(true)
      
      
      
      setTimeout(()=>{
        
        setavanc(false);
        onRefresh();
        setresponse([]);
        sethep(0);
        setcurrent([]);


      },1000)
      

      
      
      setquizb([
        {key:'1',question:'Habilidade requerida',alternatives:['Alta','Média','Baixa']},
        {key:'2',question:'Qualidade dos procedimentos escritos',alternatives:['Não existe','Difícil utilização','Boa qualidade']},
        {key:'3',question:'Nível de supervisão',alternatives:['Não existe verificação','Existe presencialmente','Alguma verificação']},
        
        {key:'4',question:'Familiaridade com a tarefa',alternatives:['Baixa','Média','Alta']},
        {key:'5',question:'Auxilio da automação (Ações e alarmes)',alternatives:['Não existe','Existe ação da automação','Existe alarme e ação da automação']},
           
        {key:'6',question:'Tem consciência dos efeitos?',alternatives:['Sim','Não']},
        {key:'7',question:'Complexidade da tarefa',alternatives:['Baixa','Média','Alta']},
        {key:'8',question:'Nível de concentração exigida na tarefa',alternatives:['Alta','Média','Baixa']},
        {key:'9',question:'Adequação da tarefa ao ser humano',alternatives:['Inadequado','Com tempo adequado','Com tempo e distribuição adequados']},
        {key:'10',question:'Treinamento (Pessoas)',alternatives:['Altamente treinadas','Com algum treinamento','Sem treinamento']},
        {key:'11',question:'Experiência',alternatives:['Tem experiência','Não tem experiência']},
        {key:'12',question:'Motivação',alternatives:['Alta','Média','Baixa']},
        
        
        
        
      ])
      
      
      

    });
    
    return unsubscribe
  },[navigation])
  useEffect(()=>{
    console.log(response)
    ValidarHep2(response,sethep,setepc2,epc)
    console.log(hep)
    
  },[response])
  const produtorio=  ()=>{
    let total=1
     try{newepc.forEach(element => {
      total=total*((element.escolha*(element.fator-1))+1)
      console.log((element.escolha*(element.fator-1))+1)
      
    });
    console.log(total)
   }catch(e){
     console.log(e)
   }
    
    
  }
  const [epc2,setepc2]=useState([])
  const [newepc,setnewepc]=useState([])
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
  
  const [quizb,setquizb]=useState([
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

  const [quiz,setquiz]=useState([quizb[1],quizb[2],quizb[3],quizb[4],quizb[5],quizb[6],quizb[7],quizb[0],quizb[8],quizb[9],quizb[10],quizb[11]])
  return (
    <View style={styles.container}>
      
      <Modal
        transparent={true}
        visible={modalVisible2}
      
      >
        <TouchableOpacity onPress={()=>Alert.alert("Voltar para a tela inicial?",'',[{text:"Sim",onPress:()=>navigation.navigate("Home")},{text:"Cancelar"}])} style={{flex:1,opacity:0.6,backgroundColor:"white",elevation:4}}>
          
        </TouchableOpacity>
        <View style={{flex:1,alignItems:"center",elevation:90,borderRadius:20,justifyContent:"flex-start",backgroundColor:"white"}}>
            
          <View style={{marginVertical:"5%"}}>
            <View>
              <View>
                <Text style={styles.modalStyleText}>
                  Tarefa
                </Text>
              </View>
              <View>
                <TextInput onChangeText={(val)=>setTarefa(val)} style={styles.modalStyleInput} />
              </View>

            </View>
            <View>
              <View>
                <Text style={styles.modalStyleText}>
                  Função
                </Text>
              </View>
              <View>
                <TextInput onChangeText={(val)=>setFunc(val)} style={styles.modalStyleInput} />
              </View>
            
            </View>            
          </View>  
            
          <View>
            <TouchableOpacity onPress={()=>{
              tarefa==''||func=='' ? Alert.alert("Preencha todos os dados!"):
              setModalVisible2(false)
              
              }} style={styles.buttom}>
              <Text style={[{color:"white",fontSize:35}]} >
                Avançar
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </Modal>
      
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
                  data={epc2}
                  
                  keyExtractor={(item,index)=>index.toString()}
                  renderItem={({item,index})=>(
                    <View style={{alignItems:"center"}}>
                    <TouchableOpacity onPress={()=>{
                    if(current.indexOf(item.key) >-1){
                      setcurrent((current)=>{
                        return current.filter(todo => todo != item.key);
                      })

                    }else{
                      setcurrent([...current,item.key]);
                      item.escolha="0.1";
                      

                    }
                    
                    
                    
                    }} style={[current.indexOf(item.key)>-1 && {borderColor:"#00ff00ff",borderWidth:3},{justifyContent:"center",alignItems:"center",elevation:3,marginVertical:"1%",marginHorizontal:"5%",width:"90%",height:60,backgroundColor:"white"}]}>
                      <Text  style={[{paddingLeft:"4%",fontSize:15}, {color:"gray"}]}>{item.epc}</Text>
                      
                    </TouchableOpacity>
                      {current.indexOf(item.key)>-1 ? 
                        <View>
                          <Text>Selecione o fator de correção</Text>
                          <Picker
                              
                              selectedValue={item.escolha? item.escolha: "0.1"}
                              style={{color:"black",height: 50, width: 100,}}
                              onValueChange={(itemValue) =>{
                                item.escolha=itemValue;
                                setmarc(itemValue)
                                console.log(epc2);
                                
                                
                              }
                              
                            }
                              
                            >
                            <Picker.Item  label="1" value="0.1" />
                            <Picker.Item label="2" value="0.2" />
                            <Picker.Item label="3" value="0.3" />
                            <Picker.Item label="4" value="0.4" />
                            <Picker.Item label="5" value="0.5" />
                            <Picker.Item label="6" value="0.6" />
                            <Picker.Item label="7" value="0.7" />
                            <Picker.Item label="8" value="0.8" />
                            <Picker.Item label="9" value="0.9" />
                            <Picker.Item label="10" value="1" />
                          </Picker>
                        </View>

                        : null
                      }
                    </View>
                    

                  )

                  }
                
                />

              </View>
              <View style={{flex:0.4,alignItems:"flex-end",marginBottom:'5%',marginEnd:"5%"}}>
                <TouchableOpacity style={styles.buttom1} onPress={()=> {
                    const a=epc2.filter((a)=>current.includes(a.key));
                    setnewepc(epc2.filter((a)=>current.includes(a.key)));

                    console.log(newepc);
                    setModalVisible1(!modalVisible1);
                    navigation.navigate('Resultados',{newepc,quiz,func,tarefa,response,hep,epc2,current});
                    
                  }
                }>
                  
                  <Text style={{marginHorizontal:"5%",fontSize:30,color:"white",fontWeight:"bold"}}>
                    Avançar
                  </Text>
                </TouchableOpacity>
              </View>
              

            </View>

          
          
        </Modal>

      
      
      <Barra func={()=>navigation.openDrawer()}/>
      <TouchableOpacity onPress={scroll()} style={{flex:0.5,justifyContent:"center",alignItems:"center",marginVertical:"3%",alignItems:"stretch"}}>
        <View>
          <Text style={{fontSize:20,fontWeight:"bold"}}>{'Tarefa: '+tarefa}</Text>
        </View>
        <View>
          <Text style={{fontSize:20,fontWeight:"bold"}}>{'Função: '+func}</Text>
        </View>
      </TouchableOpacity>
      <View style={{flex:10}}>
      <FlatList
        
        
        ref={(ref)=>{setflat(ref)}}
        data={quiz}
        
        scrollEnabled={true}
        
        
        onMomentumScrollBegin={()=>scaleon()}
        horizontal
        onScroll={(event)=>{
          
          const div=event.nativeEvent.contentOffset.x/event.nativeEvent.layoutMeasurement.width
          const roundIndex = Math.round(div)
          if(roundIndex>=quiz.length-1){
            setscroll(11)
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
                ListHeaderComponent={
                  <>
                    
                  </>
                }
                ListFooterComponent={
                  <>
                    <View style={{justifyContent:"flex-end",flex:1}}>
                      <View style={{flex:1}}>
                        <Text>*Para voltar, arraste para o lado</Text>
                      </View>
                      <Avancar />
                    </View>
                    
                    
                    
                  
                    
                  </>
                }
                initialNumToRender={10}
                keyExtractor={(item)=>item}
                renderItem={({item,index})=>(
                  <TouchableOpacity  onPress={(val)=>{
                    scaleon();
                    setresponse([...response,item]);
                    quiz[scroll2].resposta=item;
                    

                    console.log(Object.keys(val.currentTarget.viewConfig.validAttributes.borderColor))
                    console.log(val.currentTarget.viewConfig.validAttributes.borderColor)
                    
                    
                    if(scroll2!=11)
                    {flatListRef.scrollToIndex({index:scroll2+1})}else{
                      console.log("Cabou");
                      ValidarHep2(response,sethep,setepc2,epc);
                      setavanc(true);
                      
                    }
                    
                    }}  style={[quiz[scroll2].resposta==item? {borderColor:"#00ff00ff",borderWidth:3} :{borderColor:"black",borderWidth:1},{width:windowWidth*0.8,marginVertical:'4%',flexDirection:'row',borderRadius:40,height:60,alignItems:'center',backgroundColor:'white'}]}>
                    <View style={{borderRadius:60,borderWidth:1,width:45,justifyContent:'center',alignItems:'center',height:45,left:5,backgroundColor:'white'}}><Text>{index}</Text></View>
                    <Text style={{marginLeft:"5%",fontSize:20}}>{item}</Text>
                  </TouchableOpacity>
                )}
              
              />

            </Animated.View>  
          </View>

        )}
      
      />
      </View>
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
  modalStyleText:{
    fontSize:30,
    fontWeight:"bold",
    color:"gray",
   
  },
  modalStyleInput:{
    borderWidth:2,
    borderColor:"gray",
    width:windowWidth*0.7,
    borderRadius:20,
    fontSize:20,
    paddingLeft:20,
    height:50,


  },
  modalView:{
    marginVertical:"6%",
    flex:1
  },
  buttom:{
    marginHorizontal:"10%",
    borderRadius:10,
    width:200,
    height:50,
    backgroundColor:"#3f4b79ff",
    justifyContent:"center",
    alignItems:"center"
  },
  buttom1:{
    
    
    backgroundColor:"#3f4b79ff",
    justifyContent:"center",
    alignItems:"center",
    flex:1,
    borderRadius:10,
    height:50

   
  }
});
