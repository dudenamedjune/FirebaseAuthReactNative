//Import libraries
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
//make a component
const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={[textStyle]}>{headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'

  },
  textStyle: {
    color: 'black',
    fontSize: 20,
  },
});
//make the component avalible
export { Header };
