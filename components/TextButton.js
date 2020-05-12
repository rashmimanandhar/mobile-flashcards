import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {green} from "../utils/colors";

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
    color: green,
  }
})

TextButton.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  btnTextStyle: PropTypes.object,
}
