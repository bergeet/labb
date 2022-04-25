import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import nb991 from './assets/images/nb-991.webp';
import { data } from './src/api/mock';
import BaseProduct from './src/product/product';
import header from './assets/images/header.svg';
import { H1 } from './src/styles/typography';

export default function App() {
  const _data = data.products.filter((product) => product.type === 'shoe');

  return (
    <>
      <View style={styles.header}>
        <H1 extraStyle={{ color: 'red' }}>Sneakerz</H1>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}></View>

        {_data &&
          _data[0].items.map((shoe, idx) => (
            <BaseProduct key={idx} id={shoe.id} image={shoe.image} name={shoe.name} price={shoe.price} description={shoe.description}></BaseProduct>
          ))}
        <StatusBar style="auto" />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    width: '100%',
    backgroundColor: '#4B5036',
    padding: 40,
  },
  content: { padding: 20 },
  container: {
    backgroundColor: '#fff',
    overflow: 'scroll',
    alignItems: 'center',
  },
});
