import React from "react"
import { View,Image,TouchableOpacity } from 'react-native';




export const AddButton=({func})=>{
    return (

        <View style={{flex:1,alignItems:"flex-end",marginHorizontal:"5%",marginVertical:"5%"}}>
            <TouchableOpacity onPress={()=>func()}>
                <Image style={{resizeMode:"contain",width:50,height:50}} source={require('../../assets/imagens/mais.png')} />
            </TouchableOpacity>
           

        </View>


    )
}



export default  AddButton