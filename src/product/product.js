import React, { useState } from 'react';
import { Button } from '@rneui/themed';
import { StyleSheet,  View, Image,  Alert } from 'react-native';
import { H1 } from '../styles/typography';
import { Text, useTheme } from '@rneui/themed';
export const BaseProduct = ({ id, name, description, price, image, handleAddTocart }) => {
  const onAddToCart = () => {
    setLoading(true);

    setTimeout(() => {
      handleAddTocart(id);
      Alert.alert(`${name} placerades i varukorgen`);
      setLoading(false);
    }, 2000);

  };
const [loading, setLoading] = useState(false);
  return (
    <View key={id} style={styles.container}>
      <Text h3>{name}</Text>
      <Image source={image} style={styles.image}></Image>
      <Text p>{description}</Text>
      <Text>{price} kr</Text>
      <Button title="Lägg i kundkorgen" onPress={() => onAddToCart()} style={styles.button} loading={loading}></Button>
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
  button: {
    marginTop: 16
  }
});
