import React from 'react';
import {View, Text, Button} from 'react-native';

export const MainScreen = ({navigation}) => {
  return (
    <View>
      <Button
        title="Go to bluetooth settings"
        onPress={() => navigation.navigate('Bluetooth')}
      />
      <Text>Value1</Text>
      <Text>Value2</Text>
      <Text>Value3</Text>
      <Text>Value4</Text>
    </View>
  );
};
