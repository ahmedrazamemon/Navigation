import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Components/Login';
import Spalsh_Screen from './Components/Splash_Screen';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
// import { Drawer } from 'react-native-paper';
import MyDrawer from './MyDrawer';
import Bottom from './Bottom';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    // <View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash_Screen" options={{headerShown:false}} component={Spalsh_Screen} />
        {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
        <Stack.Screen name="Login"  options={{headerShown:false}} component={Login} />
        <Stack.Screen options={{headerShown:false}} name="Bottom" component={Bottom} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='Drawer' options={{headerShown:false}} component={MyDrawer}/>
      </Stack.Navigator>
    </NavigationContainer>

    //     </View>
  );
}
export default AppNavigator;
