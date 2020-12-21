// In App.js in a new project

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {BluetoothScreen} from './components/screens/BluetoothScreen';
import {MainScreen} from './components/screens/MainScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen name="Bluetooth" component={BluetoothScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
