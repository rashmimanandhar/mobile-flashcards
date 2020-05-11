import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {darkGray} from "../utils/colors";

export default function Button({children, onPress, btnStyle= {}, btnTextStyle = {}, disabled = false}) {
  const disabledButton = disabled ? styles.btnDisabled : {};
  const disabledButtonText = disabled ?  styles.btnDisabledText : {};
  return(
    <View style={[styles.btnContainer]}>
      <TouchableOpacity style={[styles.btn, btnStyle, disabledButton]} onPress={onPress}>
        <Text style={[styles.btnText, btnTextStyle, disabledButtonText]}>{children}</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    margin: 10,
    borderColor: 'blue',
    borderRadius: 5
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  btn:{
    width: 200,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 5,
    justifyContent: `center`,
    alignItems: `center`
  },
  btnDisabled: {
    backgroundColor: 'gray',
    borderColor: darkGray
  },
  btnDisabledText: {
    color: darkGray
  }
})

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  btnTextStyle: PropTypes.object,
  btnStyle: PropTypes.object
}
