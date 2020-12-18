import { StatusBar } from 'expo-status-bar';
import  React,{useState,useRef,useEffect} from 'react';
import { Animated,StyleSheet,Dimensions,TouchableOpacity,Modal, Text,FlatList, View } from 'react-native';
import {Barra} from './barra'
import {Picker} from '@react-native-picker/picker';
export  function Heart({navigation}) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const scale = useRef(new Animated.Value(1)).current;
  const [scroll2,setscroll]=useState(0)
  const [epcs,setepcs]=useState('')
  const[flatListRef,setflat]=useState()
  const [response,setresponse]=useState([])
  const [hep,sethep]=useState(0)
  const [modal,setmodal]=useState(false)
  const [modal2,setmodal2]=useState(false)
  const produtorio=[]
  const [fatorepc,setfatorepc]=useState(1)
  const [contexto,setcontexto]=useState(1)
  const [prod,setprod]=useState([])

  const confiabH=()=>{

    try{
      const a=prod.reduce((accum, curr) => accum * curr )
      return a*hep
    }
    catch(e){
      return 0
    }
  }
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
  
  useEffect(()=>{
    (
      ()=>{
        try{
          if(response[3]=="Baixa"&&response[5]=="Não"){
            sethep(0.55);
            setepcs([epc[12],epc[15]]);
            setmodal(!modal);
            
          }
          if(response[1]=="Não existe"&&response[2]=="Não existe"&&response[6]=="Alta"){
            sethep(0.26);
            setepcs([epc[12],epc[14],epc[15]]);
            setmodal(!modal)
          }
          if(response[0]=="Alta"){
            sethep(0.16);
            setepcs([epc[4],epc[8],epc[9],epc[12],epc[15],epc[16]]);
            
            setmodal(!modal);
          }
          if(response[6]=="Média"&&response[7]=="Baixa"){
            sethep(0.09);
            setepcs([epc[6],epc[8],epc[9],epc[10],epc[12],epc[15],epc[16]]);
            
            setmodal(!modal)
          }
          if(response[0]=="Baixa"&&response[3]=="Média"&&response[6]=="Baixa"){
            sethep(0.02);
            setepcs([epc[2],epc[6],epc[8],epc[9],epc[12],epc[13],epc[15],epc[16]]);
            
            setmodal(!modal)
          }
          if(response[1]=="Difícil utilização"&&response[2]=="Alguma verificação"){
            sethep(0.003);
            setepcs([epc[0],epc[5],epc[7],epc[8],epc[10],epc[12],epc[13],epc[14],epc[15],epc[16]]);
            
            setmodal(!modal)
          }
          if(response[7]=="Alta"&&response[8]=="Com tempo adequado"&&response[9]=="Pessoas altamente treinadas"&&response[10]=="Tem experiência"&&response[11]=="Alta"){
            sethep(0.0004);
            setepcs([epc[1],epc[2],epc[3],epc[6],epc[8],epc[9],epc[11],epc[12],epc[2],epc[14]]);
            
            setmodal(!modal)
          }
          if(response[3]=="Alta"&&response[4]=="Existe ação da automação"){
            sethep(0.00002);
            setepcs([epc[1],epc[2],epc[3],epc[6],epc[7],epc[8],epc[9],epc[11],epc[12],epc[13],epc[15],epc[16]]);
            
            setmodal(!modal)
          }
          

        }catch(e){
          console.log('erro')
        }
      }
    )();
    
    
  },[response])
  useEffect(()=>{
    console.log(prod);
  },[prod])
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
    {key:'5',question:'Auxilio da automação (Ações e alarmes)',alternatives:['Não existe','Existe ação da automação','Existe alarme a ação da automação']},
       
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
      <Barra func={()=>navigation.openDrawer()}/>
      <Modal  
        animationType="slide"
        
        visible={modal}
      >
        <View style={{height:windowHeight,width:windowWidth,justifyContent:"flex-start",alignItems:"center"}}>
            <View style={{borderColor:"black",borderBottomWidth:2,marginBottom:'5%'}}>
              <Text style={{fontSize:30,marginTop:"10%"}}>
                HEP
              </Text>
              
            </View>
            <Text>{hep}</Text>
            <Text>{confiabH()}</Text>
            
            <View >
              <Text>Identifique os EPC's (Error Producing Conditions)</Text>
            </View>
            <TouchableOpacity onPress={()=>setprod([])} style={{borderWidth:2,justifyContent:"center",alignItems:"center",flexDirection:"row",borderColor:"blue",borderRadius:20,marginVertical:"3%",width:100}}>
                      <Text style={{paddingLeft:"5%",fontSize:20}}>Apagar</Text>
                    </TouchableOpacity>
            
            <View style={{justifyContent:"center",width:windowWidth*0.8,height:windowHeight*0.6,marginTop:"2%"}}>
              <FlatList
                data={epcs}
                
                keyExtractor={(item)=>item.key}
                renderItem={({item})=>(
                  <TouchableOpacity onPress={()=>{
                    setmodal2(!modal2);
                    setfatorepc(item.fator);
                    }} style={{borderWidth:2,flexDirection:"row",borderColor:"gray",borderRadius:20,marginVertical:"3%"}}>
                    <Text style={{paddingLeft:"5%",fontSize:20}}>{item.epc}</Text>
                  </TouchableOpacity>
                )}
              />
              <Modal
                animationType="slide"
                transparent={true}
                visible={modal2}
                
              >
                <View style={{justifyContent:"center",flex:1,alignItems:"center"}}>

                  <View style={{borderRadius:20,justifyContent:"center",alignItems:"center",width:250,height:250,backgroundColor:"white",shadowColor: "#000",shadowOffset:{width: 0,height: 2},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5}}>
                    <View>
                    <Picker
                      selectedValue={contexto}
                      style={{height: 50, width: 100}}
                      onValueChange={(itemValue, itemIndex) =>
                        setcontexto(itemValue)
                      }>
                      <Picker.Item label="1" value="0.1" />
                      <Picker.Item label="2" value="0.2" />
                      <Picker.Item label="3" value="0.3" />
                      <Picker.Item label="4" value="0.4" />
                      <Picker.Item label="5" value="0.5" />
                      <Picker.Item label="6" value="0.6" />
                      <Picker.Item label="7" value="0.7" />
                      <Picker.Item label="8" value="0.8" />
                      <Picker.Item label="9" value="0.9" />
                      <Picker.Item label="10" value="1.0" />
                    </Picker>
                    </View>
                    <TouchableOpacity onPress={()=>{
                      const ppt= (parseFloat(contexto)*(fatorepc-1))+1
                      
                      setprod([...prod,ppt]);
                      setmodal2(!modal2);
                      
                      
                    }} style={{borderWidth:2,flexDirection:"row",borderColor:"gray",borderRadius:20,marginVertical:"3%",width:"70%"}}>
                      <Text style={{paddingLeft:"5%",fontSize:20}}>Adicionar</Text>
                    </TouchableOpacity>
                  </View>

                </View>

              </Modal>
            </View>
            
        </View>

      </Modal>
      <FlatList
        data={quiz}
        scrollEventThrottle={1}
        scrollEnabled={false}
        initialPage={1}
        onMomentumScrollBegin={()=>scaleon()}
        horizontal
        onScroll={(event)=>{
          const div=event.nativeEvent.contentOffset.x/event.nativeEvent.layoutMeasurement.width
          const roundIndex = Math.round(div)
          if(roundIndex>=quiz.length-1){
            setscroll(-1)
          }else{
            setscroll(roundIndex)
          }
          
          
          

        
       
        }}
        
        
        ref={(ref)=>{setflat(ref)}}
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
                
                keyExtractor={(item)=>item}
                renderItem={({item,index})=>(
                  <TouchableOpacity onPress={()=>{
                    scaleon();
                    setresponse([...response,item]);
                    

                    
                    flatListRef.scrollToIndex({index:scroll2+1});}}  style={{width:windowWidth*0.8,marginVertical:'4%',flexDirection:'row',borderRadius:40,borderWidth:1,height:60,alignItems:'center',backgroundColor:'white'}}>
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
