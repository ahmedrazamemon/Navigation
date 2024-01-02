import React from 'react';
import { Text,View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Icon from 'react-native-vector-icons/Entypo'
import Main from './Components/Main';
const Tab = createBottomTabNavigator();

function Bottom() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Saylani Welfare"
         
        options={{
         headerShown:false, 
          tabBarLabel:"SignUp",
          tabBarIcon: ({ focused }) => {
            return (<View>
              <Icon name="add-user" size={30} color={focused ? "#2596a6" : "#4dc5d6"} />
            </View>
            )
          }
        }}
 component={SignUp} />
      <Tab.Screen name="Saylani welfare"
        options={{
          tabBarLabel:"Login",
          headerShown:false,
          tabBarIcon: ({ focused }) => {
            return (<View>
              <Icon name="user" size={30} color={focused ? "#2596a6" : "#4dc5d6"} />
            </View>
            )
          }
        }}
      component={Login} />
    </Tab.Navigator>
  );
}export default Bottom;