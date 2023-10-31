import React,{useState} from "react";
import { Alert, StatusBar, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';



function Login(){
  const [name, setname] =  useState("");
  const [email, setemail] =  useState("");
  const [password, setpassword] =  useState("");

  const createEmailPassword = () => {
    if (name == '') {
      Snackbar.show({
        text: 'Must Enter Name',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'black',
        textColor: 'red',
        // fontFamily:"serif",
        // fontSize: 20,
      });
    } else if (email == '') {
      Snackbar.show({
        text: 'Enter Email Address',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'black',
        textColor: 'red',
        // fontSize: 20,
      });
    } else if (name == '') {
      Snackbar.show({
        text: 'Must Enter name',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'black',
        textColor: 'red',
        // fontSize: 20,
      });
    } else if (password == '') {
      Snackbar.show({
        text: 'Enter Password',
        duration: Snackbar.LENGTH_SHORT,
        // margin: 20,
        backgroundColor: 'black',
        textColor: 'red',
        // fontSize: 20,
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
    } else if (

        console.log("sxas")
      // Alert.alert('Account Created..')
      // console.log("")
      // navigation.push("Spalsh_Screen")
      // /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password) ==
      // false
    ) {
      Snackbar.show({
        text: 'Plz valid password',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'grey',
        textColor: 'red',
      });
    } else {
      console.log(email);
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          console.log(res.user.uid);
          Alert.alert("Account Created !")
          // database()
          //   .ref('/users/allusers')
          //   .push({
          //     username: name,
          //     emaildd: email,
          //   })
            // .then(() => console.log('Data set.'));
        })
        .catch(err => {
          if (err.code == 'auth/email-already-in-use') {
            // Alert.alert('Email is ALready regsiter');
            Alert.alert("alredy exists")
          }
        });
    }
  };

  return(
    <View>
      <StatusBar barStyle={"default"}/>
      <Text style={{textAlign:"center"}}>
Welcome!
      </Text>
      {/* <View> */}

<View style={Style.main}>

      <TextInput style={Style.form}
      label="Name"
      value={name}
      onChangeText={(e) => setname(e) 
      }
      />
          {/* </Text> */}
      <TextInput style={Style.form}
      label="Email"
      value={email}
      onChangeText={(e) => setemail(e)}
    />
          {/* </Text> */}
    {/* </View> */}
    <TextInput style={Style.form}
    label="Password"
    value={password}
    onChangeText={(e) => setpassword(e)}
  />
  <Button onPress={()=>createEmailPassword()}>
    Submit
  </Button>
    </View>
    </View>
  )
}export default Login;

const Style = StyleSheet.create({
main:{
  display:"flex",
  justifyContent:"center",
    height:600,
    // backgroundColor:"beige"


},

  form:{
    display:"flex",
    margin:10,
    width:"auto",
    // height:600,
    padding:3,
    // alignItems:"center",
    justifyContent:"center",
    // alignContent:"center"
  }
})
