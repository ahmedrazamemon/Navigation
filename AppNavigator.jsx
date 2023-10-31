import React, { useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Components/Login";
import Spalsh_Screen from "./Components/Splash_Screen";

function AppNavigator(){

    const Stack = createNativeStackNavigator()


    return(
        <View>
            <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash_Screen" component={Spalsh_Screen} />
        <Stack.Screen name="Login" component={Login} />

      </Stack.Navigator>
    </NavigationContainer>

        </View>
    )
}export default AppNavigator;