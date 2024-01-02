import React, {useEffect} from 'react';
import { Image, Text, View} from 'react-native';
import {ActivityIndicator, MD2Colors } from 'react-native-paper';
// import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';

function Spalsh_Screen({navigation}) {
    useEffect(() => {
      setTimeout(() => {
        navigation.replace('Bottom');
      }, 2000);
    }, []);

 
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 800,
        backgroundColor:"#ecf0f1"
      }}>
        <Text style={{fontFamily:"Pacifico-Regular",fontSize:40}}>
         Saylani Welfare
        </Text>
        <Image style={{width:150,height:150,margin:20}} source={require("../assets/images/saylani.jpg")}></Image>
        <ActivityIndicator animating={true} Type={"large"} color={MD2Colors.red800} />
        
          </View>
  );
}
export default Spalsh_Screen;
