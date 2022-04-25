import React from 'react';
import { Text, useTheme } from '@rneui/themed';
import { StyleSheet, View, Image } from 'react-native';

export const H1 = ({ children, extraStyle }) => {
  return <Text style={[styles.heading, extraStyle && extraStyle]}>{children}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: "left"
  },
});
