import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';

const Stack = createStackNavigator();

const Navigation = () => {
  const navigatiorOptions = { 
    headerShown: false
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={navigatiorOptions}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;