import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Profile = () => {
  const [userProfile, setUserProfile] = useState({});
  const [newName, setNewName] = useState('');

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        const username = user.displayName;

        const userRef = firestore().collection('users').doc(username);

        userRef.get().then((documentSnapshot) => {
          if (documentSnapshot.exists) {
            setUserProfile(documentSnapshot.data());
          }
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const updateProfile = () => {
    const username = auth().currentUser.displayName;

    const userRef = firestore().collection('users').doc(username);

    userRef.update({
      name: newName,
    });
  };

  const deleteProfile = () => {
    const username = auth().currentUser.displayName;

    const userRef = firestore().collection('users').doc(username);

    userRef.delete();
  };

  return (
    <View>
      <Text>Name: {userProfile.name}</Text>
      <TextInput
        placeholder="New Name"
        value={newName}
        onChangeText={(text) => setNewName(text)}
      />
      <Button title="Update Profile" onPress={updateProfile} />
      <Button title="Delete Profile" onPress={deleteProfile} />
    </View>
  );
};

export default Profile;
