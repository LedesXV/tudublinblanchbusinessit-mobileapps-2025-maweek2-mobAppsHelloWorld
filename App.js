import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function App() {
  const [fullname, setFullname] = useState("Eoin Okenendy"); // Replace with your name
  return (
    <View>
      <Text style={styles.paragraph}>Hello, World {fullname}</Text>

      <TextInput 
      placeholder="Enter your name"
      onChangeText={(text) => setFullname(text)}
      />

     </View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});