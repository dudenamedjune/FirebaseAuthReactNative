import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';


const Spinner = ({ size }) => {
  return (
    <View styles={styles.spinnerStyle} >
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export { Spinner };
