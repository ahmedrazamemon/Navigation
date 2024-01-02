import React, {useState} from 'react';
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,Image
} from 'react-native';
import {Button,TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/AntDesign'
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
// import { Image } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
const usersCollection = firestore().collection('Users');
// const userDocument = firestore().collection('Users').doc('ABC');

function SignUp({navigation}) {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [showpassword, setshowpassword] = useState(true)
  const [showbtn, setshowbtn] = useState(false)
  
  

  const createEmailPassword = async () => {
    if (name == '') {
      Snackbar.show({
        text: 'Must Enter Name',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'black',
        textColor: 'red',
      });
    } else if (email == '') {
      Snackbar.show({
        text: 'Enter Email Address',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'black',
        textColor: 'red',
      });
    } else if (name == '') {
      Snackbar.show({
        text: 'Must Enter name',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'black',
        textColor: 'red',
      });
    } else if (password == '') {
      Snackbar.show({
        text: 'Enter Password',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'black',
        textColor: 'red',
      });
    } else if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false
    ) {
      Snackbar.show({
        text: 'Enter Valid Email',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'black',
        textColor: 'yellow',
      });
    }
    else {
      console.log(email);
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          console.log(res.user.uid);
          Snackbar.show({
            text: 'Account Created',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: 'black',
            textColor: 'gold',
          });
          navigation.replace('Login');
          console.log('created');
          firestore().collection('Users').doc(res.user.uid).set({
            username: name,
            email: email,
          });
        
        })
        .catch(err => {
          // if (err.code == 'auth/email-already-in-use') {
          Alert.alert(err.code)
          // }
        });
    }
  };

  return (
    <ScrollView style={Style.body}> 
    <View style={Style.main}> 
    <Text style={{textAlign:"center",fontSize:30}}>Sign Up</Text>
{/* <Icon name="user" size={60}/> */}
<Image style={{marginLeft:"auto",marginRight:"auto",width:100,height:100}} width={70} height={10} source={{uri:'https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-512.png'}}/>
    <TextInput
  
onChangeText={(e) => setname(e)}
value={name}
mode="outlined"
style={{ backgroundColor: "white", color: "blue", margin: 20 }}
label="Name"
left={<TextInput.Icon icon="email" color={"black"} />}
/>
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
       <TouchableOpacity onPress={()=>createEmailPassword()}>
        <Text style={Style.form}>Create Account</Text>
       </TouchableOpacity>
       {/* <ActivityIndicator animating={true} Type={"large"}  color={MD2Colors.black800} /> */}
        </View>
        </ScrollView>
  );
}
export default SignUp;

const Style = StyleSheet.create({
  body: {
    backgroundColor: 'rgb(229 240 216)',
    height: 800,
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    height: 600,
    // backgroundColor:"beige"
  },

btn: {
   textAlign:"center"
  },
  form: {
    textAlign:"center"
   },
 
});
