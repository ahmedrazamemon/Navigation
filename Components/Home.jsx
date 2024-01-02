// Home.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('tasks') // Replace with your actual collection name
      .onSnapshot((querySnapshot) => {
        const newCards = [];
        querySnapshot.forEach((doc) => {
          newCards.push({ id: doc.id, ...doc.data() });
        });
        setCards(newCards);
      });

    return () => unsubscribe();
  }, []);

  const renderCardItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <Image style={styles.cardImage} source={{ uri: item.img }} />
      <Text style={styles.cardText}>{item.title}</Text>
    </View>
  );

  if (cards.length === 0) {
    return <Text>Loading...</Text>;
  }

  return (
    <FlatList
      data={cards}
      keyExtractor={(item) => item.id}
      renderItem={renderCardItem}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
