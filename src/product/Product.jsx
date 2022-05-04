import { Button, Heading, Text } from "native-base";
import React, { useState } from "react";
import { Alert, Image, StyleSheet, View } from "react-native";

export const BaseProduct = ({
  id,
  name,
  description,
  price,
  image,
  handleAddTocart,
}) => {
  const onAddToCart = () => {
    // Product things
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
      <Heading size="lg">{name}</Heading>
      <Image source={image} style={styles.image}></Image>
      <Text>{description}</Text>
      <Text>{price} kr</Text>
      <Button
        title="Lägg i kundkorgen"
        onPress={() => onAddToCart()}
        style={styles.button}
        isLoading={loading}
      >
        Lägg till
      </Button>
    </View>
  );
};

export default BaseProduct;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 24,
  },
  button: {
    marginTop: 16,
  },
});
