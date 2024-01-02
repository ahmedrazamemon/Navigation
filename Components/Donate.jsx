import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Snackbar from 'react-native-snackbar';
const DonationForm = () => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const collectionname = 'Help'
  const handleDonate =async () => {
await firestore().collection(collectionname).add({username:name,useremail:email,donation:amount})
    // console.log('Donation Details:', { amount, name, email });
    Snackbar.show({
      text: 'Donation Sent..',
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: 'black',
      textColor: 'gold',
    });
    setAmount("")
    setEmail("")
    setName("")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Donation Form</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter donation amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={(text) => setAmount(text)}
      />

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

      <Button title="Donate" onPress={handleDonate} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default DonationForm;
