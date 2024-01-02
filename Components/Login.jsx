import React, {useState} from 'react';
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import {Button, TextInput,ActivityIndicator,MD2Colors} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';

function Login({navigation}) {
  // const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [showpassword, setshowpassword] = useState(true)

  const [password, setpassword] = useState('');

  const signinwithemail  = async () => {
    if (email == '') {
      Snackbar.show({
        text: 'Must Enter Enail',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'black',
        textColor: 'red',
      });
    } else if (password == '') {
      Snackbar.show({
        text: 'Enter Email password',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'black',
        textColor: 'red',
      });
    }
    
      try{

        await auth()
        .signInWithEmailAndPassword(email, password)
        .then(res=>{
          console.log(res.user.uid)
          
          Snackbar.show({
            text: 'Logged In',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: 'black',
            textColor: 'gold',
          });
          navigation.replace("Drawer")
          // signInWithEmailAndPassword(email,password)
        })
        console.log(res)
      }
      catch(e){
        // Alert.alert(e.code)
  
      
    }
    
  };

  return (
    <ScrollView style={Style.body}> 
    
    <View style={Style.main}> 
    <Text style={{textAlign:"center",fontSize:30}}>Login</Text>
{/* <Icon name="user" size={60}/> */}
<Image style={{marginLeft:"auto",marginRight:"auto",width:100,height:100}} width={70} height={10} source={{uri:'https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-512.png'}}/>
  
    <TextInput

            onChangeText={(e) => setemail(e)}
            value={email}
            mode="outlined"
            style={{ backgroundColor: "white", color: "blue", margin: 20 }}
            label="Email"
            left={<TextInput.Icon icon="account" color={"black"} />}
        />
        <TextInput
            value={password}
            onChangeText={(e) => setpassword(e)}
            mode="outlined"
            style={{ backgroundColor: "white", color: "blue", marginVertical: 2, marginHorizontal: 20 }}
            label="Password"
            secureTextEntry={showpassword}
            left={<TextInput.Icon icon="lock" color={"black"} />}
            right={
                showpassword ?
                    <TextInput.Icon icon="eye-off" color={"black"} onPress={() => setshowpassword(false)} />
                    :
                    <TextInput.Icon icon="eye" color={"black"} onPress={() => setshowpassword(true)} />

            }
        />
       <TouchableOpacity onPress={()=>signinwithemail()}>
        <Text style={Style.form}>Login</Text>
       </TouchableOpacity>
       
        {/* <ActivityIndicator animating={true} Type={"large"} color={MD2Colors.black800} /> */}
       
   
       
       </View>
       </ScrollView>
  );
}
export default Login;

const Style = StyleSheet.create({
 
 body:{
  backgroundColor: 'rgb(229 240 216)',
  // backgroundColor: '#ececec',
  height:800
 },
  main: {
    display: 'flex',
    justifyContent: 'center',
    height: 600,
    // backgroundColor:"beige"
  },

  form: {
    display: 'flex',
    margin: 10,
    width: '500px',
    textAlign:"center",
    // height:600,
    padding: 3,
    // alignItems:"center",
    justifyContent: 'center',
    // alignContent:"center"
  },
});
