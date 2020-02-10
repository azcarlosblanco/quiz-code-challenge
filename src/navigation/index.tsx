import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';

export type RootStackParamList = {
  Home: undefined;
};

type screenOptionstypes = {
  headerShown: boolean;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation: React.FC<{}> = () => {
  const navigatiorOptions: screenOptionstypes = { 
    headerShown: false
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={navigatiorOptions} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;