import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Quiz from "../screens/quiz";
import { RootStackParamList, ScreenOptionstypes } from "../utils/types";

const Stack = createStackNavigator<RootStackParamList>();

const Navigation: React.FC<{}> = () => {
  const navigatiorOptions: ScreenOptionstypes = { 
    headerShown: false
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={navigatiorOptions} initialRouteName="Quiz">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Quiz" component={Quiz} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;