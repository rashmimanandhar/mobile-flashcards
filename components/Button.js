import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

export default function Button({children, onPress, btnStyle= {}, btnTextStyle = {}}) {
  return(
    <View style={[styles.btnContainer]}>
      <TouchableOpacity style={[styles.btn, btnStyle]} onPress={onPress}>
        <Text style={[styles.btnText, btnTextStyle]}>{children}</Text>
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
  }
})

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  btnTextStyle: PropTypes.object,
  btnStyle: PropTypes.object
}
