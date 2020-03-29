import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Incidets from './pages/incidents';
import Detail from './pages/detail';

const AppStack = createStackNavigator();

export default function Routes(){
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Incidents" component={Incidets} />
        <AppStack.Screen name="Detail" component={Detail} />
      </AppStack.Navigator>

    </NavigationContainer>
  );
}