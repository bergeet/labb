import React from 'react';

import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { H1 } from '../styles/typography';

export const BaseProduct = ({ id, name, description, price, image }) => {
  const onAddToCart = () => {
    Alert.alert(`${name} placerades i varukorgen`);
  };

  return (
    <View key={id} style={styles.container}>
      <H1>{name}</H1>
      <Image source={image} style={styles.image}></Image>
      <Text>{description}</Text>
      <Text>{price} kr</Text>
      <Button title="köp:)" onPress={() => onAddToCart()}></Button>
    </View>
  );
};

export default BaseProduct;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 24,
  },
});
