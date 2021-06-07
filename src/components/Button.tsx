import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({title, ...rest}: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
  },
});
