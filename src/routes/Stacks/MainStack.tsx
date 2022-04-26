import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../Screens/HomeScreen';
import DetailsScreen from '../../Screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
              name="Home" 
              component={Home}
              options={{ title: 'Overview' }} 
            />
            <Stack.Screen 
              name="Details" 
              component={DetailsScreen} 
              options={{ title: 'Details' }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}