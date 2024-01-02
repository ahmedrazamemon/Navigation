import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Snackbar from 'react-native-snackbar';
const collectionName = 'ProductsData';

const ItemList = () => {
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
    <View>
      <TextInput
        placeholder="Enter item text"
        value={newItemText}
        onChangeText={(text) => setNewItemText(text)}
      />
      <Button title={updateItemId ? 'Update Item' : 'Add Item'} onPress={addNewItem} />

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.text}</Text>
            <Button title="Update" onPress={() => { setUpdateItemId(item.id); setNewItemText(item.text); }} />
            <Button title="Delete" onPress={() => deleteItem(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default ItemList;
