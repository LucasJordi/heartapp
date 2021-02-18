import React from "react"
import { View,Image,Text,TouchableOpacity } from 'react-native';




export const AddButton=({func})=>{
    return (

        <View style={{flex:1,alignItems:"flex-end",marginHorizontal:"5%",marginVertical:"5%"}}>
            <TouchableOpacity onPress={()=>func()}>
                <Text style={{fontSize:70,fontWeight:"bold",color:"#ccccccf7"}}>+</Text>
            </TouchableOpacity>
           

        </View>


    )
}



export default  AddButton