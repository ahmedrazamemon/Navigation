import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList,StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Snackbar from 'react-native-snackbar';
const collectionName = 'Policy';

const About = () => {
  const [items, setItems] = useState([]);
  const [newItemText, setNewItemText] = useState('');
  const [updateItemId, setUpdateItemId] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const itemsData = await getItems();
      setItems(itemsData);
    };

    fetchItems();
  }, []);

  const addNewItem = async () => {
    if (newItemText.trim() !== '') {
      if (updateItemId) {
        await updateItem(updateItemId, { text: newItemText });
        setUpdateItemId(null);
      } else {
        await firestore().collection(collectionName).add({ text: newItemText, });
      }

      setNewItemText('');
      const updatedItems = await getItems();
      setItems(updatedItems);
    }
  };

  const getItems = async () => {
    const snapshot = await firestore().collection(collectionName).get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  };

  const updateItem = async (itemId, newData) => {
    await firestore().collection(collectionName).doc(itemId).update(newData);
  };

  const deleteItem = async (itemId) => {
    await firestore().collection(collectionName).doc(itemId).delete();
    const updatedItems = await getItems();
    setItems(updatedItems);
  };

  return (
      <View style={styles.body}>
    <View >

      {/* <TextInput
        placeholder="Enter item text"
        value={newItemText}
        onChangeText={(text) => setNewItemText(text)}
      />
      <Button title={updateItemId ? 'Update Item' : 'Add Item'} onPress={addNewItem} /> */}

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        style={styles.cardContainer}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.cardText} >{item.title}</Text>
            <Text>{item.description}</Text>

          </View>
        )}
        />
    </View>
        </View>
  );
};

export default About;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    height:"200",
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  body: {
    width: '100%',
    height:800,
    backgroundColor: 'rgb(229 240 216)',
    
  },
  cardText: {
    fontSize: 22,
    textAlign:"center",
    fontWeight: 'bold',
    // height:"auto"
  },
});

