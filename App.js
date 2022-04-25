import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import { data } from "./src/api/mock";
import BaseProduct from "./src/product/product";
import { Header } from "@rneui/themed";
import Swiper from "react-native-swiper";
import { Text, Overlay } from "@rneui/themed";
import { Icon } from "@rneui/themed";
import { useState } from "react";

export default function App() {
  const _data = data.products.filter((product) => product.type === "shoe");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <Header
        backgroundColor="#4B5036"
        placement="left"
        leftComponent={{ icon: "menu", color: "#fff", paddingLeft: 16 }}
        centerComponent={{
          text: "Canoeit",
          style: { color: "#fff", fontSize: 18 },
        }}
        rightComponent={{
          icon: "shopping-cart",
          color: "#fff",
          onPress: () => setShowCart(true),
        }}
      />
      <Overlay isVisible={showCart} onBackdropPress={() => setShowCart(false)}>
        <Text>Kundkorg</Text>
        <Text>Varor i kundkorgen: {cart.length}</Text>
      </Overlay>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <Text h1>Sneakers</Text>
        </View>
        <Swiper loop={false} showsPagination={true}>
          {_data &&
            _data[0].items.map((shoe, idx) => (
              <BaseProduct
                handleAddTocart={(product) => setCart([...cart, product])}
                key={idx}
                id={shoe.id}
                image={shoe.image}
                name={shoe.name}
                price={shoe.price}
                description={shoe.description}
              ></BaseProduct>
            ))}
        </Swiper>
        <StatusBar style="auto" />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#4B5036",
    padding: 40,
    display: "flex",
    justifyContent: "center",
  },
  content: { padding: 20, textAlign: "left" },
  container: {
    backgroundColor: "#fff",
  },
});
