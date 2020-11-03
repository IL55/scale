import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});

export const HomeScreen = (props) => {
  return (
    <View style={styles.root}>
      <Text>Home</Text>
    </View>
  );
};
