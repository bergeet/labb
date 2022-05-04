import { MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  Heading,
  HStack,
  Icon,
  IconButton,
  Modal,
  NativeBaseProvider,
  StatusBar,
  Text,
} from "native-base";
import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { data } from "./src/api/mock";
import BaseProduct from "./src/product/Product";
import GetLocation from "./src/services/location/Location";

export default function App() {
  //States
  const _data = data.products.filter((product) => product.type === "shoe");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  return (
    <NativeBaseProvider>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="#6200ee" />
      <HStack
        bg="#6200ee"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <HStack alignItems="center">
          <IconButton
            icon={
              <Icon size="sm" as={MaterialIcons} name="menu" color="white" />
            }
          />
          <Text color="white" fontSize="20" fontWeight="bold">
            Very cool shoes
          </Text>
        </HStack>
        <HStack>
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                onPress={() => setShowCart(true)}
                name="shopping-cart"
                size="md"
                color="white"
              />
            }
          />
        </HStack>
      </HStack>
      <Modal isOpen={showCart} onClose={() => setShowCart(false)}>
        <Modal.Content padding="20px">
          <Heading size="md">Kundkorg</Heading>
          <Text>Varor i kundkorgen: {cart.length}</Text>
        </Modal.Content>
      </Modal>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Get device location */}
        {/* <GetLocation /> */}
        <View style={styles.content}>
          <Heading size="lg">Sneakers</Heading>
        </View>
        {/* <Swiper loop={false} showsPagination={true}> */}
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
        {/* </Swiper> */}
        <StatusBar style="auto" />
      </ScrollView>
    </NativeBaseProvider>
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

    display: "flex",
    justifyContent: "center",
  },
});
