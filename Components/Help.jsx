import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';
import firestore from '@react-native-firebase/firestore'
import Snackbar from 'react-native-snackbar';
const HelpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, settype] = useState('');
  const [location, setlocation] = useState('');
  const [cnic, setcnic] = useState('');
  const [contact, setcontact] = useState('');

  const handleHelpRequest =async () => {
   if(name==""){
    Snackbar.show({
      text: 'Must Enter Name',
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: 'black',
      textColor: 'red',
    });
   }
   else if(email==""){
    Snackbar.show({
      text: 'Enter Email',
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: 'black',
      textColor: 'red',
    });
   }  else if(contact==""){
    Snackbar.show({
      text: 'Enter Contact Number',
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: 'black',
      textColor: 'red',
    });
   }  else if(type==""){
    Snackbar.show({
      text: 'Enter Type',
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: 'black',
      textColor: 'red',
    });
   }  else if(cnic==""){
    Snackbar.show({
      text: 'Enter Cnic',
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: 'black',
      textColor: 'red',
    });
   }  else if(location==""){
    Snackbar.show({
      text: 'Enter location',
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: 'black',
      textColor: 'red',
    });
   }
   else{

     // Add your logic to handle the help request (e.g., send to server, notify volunteers, etc.)
     await firestore().collection(collectionname).add({username:name,useremail:email,need:type,userlocation:location,usercnic:cnic,usercell:contact})
     console.log('Help Request Details:', { selectedOption, name, email });
    };
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Help Request Form</Text>

     
       <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Your Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
  <TextInput
        style={styles.input}
        placeholder="Food,Medical,"
        keyboardType="email-address"
        value={type}
        onChangeText={(text) => settype(text)}
      />
       <TextInput
        style={styles.input}
        placeholder="Street,Road etc"
        keyboardType="email-address"
        value={location}
        onChangeText={(text) => setlocation(text)}
      />
       <TextInput
      style={styles.input}
      placeholder="Cnic Number"
      keyboardType="number-pad"
      value={cnic}
      onChangeText={(text) => setcnic(text)}
    /> 
     <TextInput
        style={styles.input}
        placeholder="1234567"
        keyboardType="number-pad"
        value={contact}
        onChangeText={(text) => setcontact(text)}
      />
      <Button title="Request Help" onPress={handleHelpRequest} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  dropdown: {
    height: 40,
    marginBottom: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default HelpForm;
