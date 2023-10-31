import React,{useEffect} from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

function Spalsh_Screen({navigation}){
    
// useEffect(()=>{
//         setTimeout(()=>{
//             navigation.replace("Login")
//         },1000)
//     },[])


    return(
        <View>
            <Text style={{color:"black",display:"flex",alignItems:"center",justifyContent:"center"}}>
                Splash
            </Text>

            <Text style={{color:"black",display:"flex",alignItems:"center",justifyContent:"center"}}>
                Splash
            </Text>
            <Text style={{color:"black",display:"flex",alignItems:"center",justifyContent:"center"}}>
                Splash
            </Text>
            <Text style={{color:"black",display:"flex",alignItems:"center",justifyContent:"center"}}>
                Splash
            </Text>
            <Button onPress={navigation.navigate("Login")}>
                Press Me
            </Button>
        </View>
    )
}export default Spalsh_Screen;