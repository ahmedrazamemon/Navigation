import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Image, StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home';
import About from './Components/About';
import Term from './Components/Terms';
import Donate from './Components/Donate';
import HelpForm from './Components/Help';
import Profile from './Components/Profile';
import Logout from './Logout';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // You may need to install this package

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => {
  const screenIcons = {
    Home: 'home',
    About: 'info',
    Policy: 'assignment',
    Term: 'description',
    Donation: 'attach-money',
    Help: 'help-outline',
    Profile: 'person',
    Logout: 'exit-to-app',
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.drawerImage}
          source={{ uri: 'https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-512.png' }}
        />
        {/* <Text style={styles.headerText}></Text> */}
      </View>

      <DrawerContentScrollView>
        {Object.keys(screenIcons).map((screen, index) => (
          <DrawerItem
            key={index}
            label={screen}
            icon={({ color, size }) => (
              <MaterialIcons
                name={screenIcons[screen]}
                size={size}
                color={color}
              />
            )}
            onPress={() => navigation.navigate(screen)}
          />
        ))}
      </DrawerContentScrollView>
    </View>
  );
};

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={({ navigation }) => <CustomDrawerContent navigation={navigation} />}
      drawerStyle={{
        backgroundColor: 'green',
        width: 240,
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Policy" component={Term} />
      <Drawer.Screen name="Term" component={Term} />
      <Drawer.Screen name="Donation" component={Donate} />
      <Drawer.Screen name="Help" component={HelpForm} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  drawerImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginRight: "auto",
    marginLeft:"auto"
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MyDrawer;
