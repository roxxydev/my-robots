import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
