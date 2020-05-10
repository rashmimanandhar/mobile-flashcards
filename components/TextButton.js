import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

export default function TextButton({children, onPress, btnTextStyle = {}}) {
  return(
    <View style={[styles.btnContainer]}>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.btnText, btnTextStyle]}>{children}</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
})

TextButton.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  btnTextStyle: PropTypes.object,
}
