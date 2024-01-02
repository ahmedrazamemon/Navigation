
// CustomDrawer.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';


const CustomDrawer = (props) => {
  const { navigation } = props;

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        {/* User Avatar */}
        <Image
          source={{ uri: 'user_avatar_url' }} // Replace with the user's avatar URL or local path
          style={{ width: 80, height: 80, borderRadius: 40 }}
        />

        {/* User Email */}
        <Text style={{ marginTop: 10, fontSize: 16, fontWeight: 'bold' }}>
          user@example.com {/* Replace with the user's email */}
        </Text>
      </View>

      {/* Drawer Items */}
      <DrawerItemList {...props} />

      {/* Additional Drawer Items */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={{ margin: 16 }}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Text style={{ margin: 16 }}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text style={{ margin: 16 }}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Request')}>
        <Text style={{ margin: 16 }}>Form</Text>
      </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Donate')}>
        <Text style={{ margin: 16 }}>Form</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
