import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
});

const Page1 = () => (
  <View>
    <Text>Here is a starter page</Text>
    <Image
      style={styles.image}
      source={{
        uri: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&dl=rene-porter-hteGzeFuB7w-unsplash.jpg&w=640&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
      }}
    />
    <Text>Some other text</Text>
  </View>
);

export default Page1;
