import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {darkGray, disabledGrey, green, textColor} from "../utils/colors";

export default function Button({children, onPress, btnStyle = {}, btnTextStyle = {}, disabled = false}) {
  const disabledButton = disabled ? styles.btnDisabled : {};
  const disabledButtonText = disabled ? styles.btnDisabledText : {};
  return (
    <View style={[styles.btnContainer]}>
      <TouchableOpacity style={[styles.btn, btnStyle, disabledButton]} onPress={onPress} disabled={disabled}>
        <Text style={[styles.btnText, btnTextStyle, disabledButtonText]}>{children}</Text>
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
    color: 'white'
  },
  btn: {
    width: 200,
    height: 50,
    backgroundColor: green,
    borderRadius: 7,
    justifyContent: `center`,
    alignItems: `center`
  },
  btnDisabled: {
    backgroundColor: disabledGrey,
    borderColor: darkGray
  },
  btnDisabledText: {
    color: textColor
  }
})

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  btnTextStyle: PropTypes.object,
  btnStyle: PropTypes.object
}
