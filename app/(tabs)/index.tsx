import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
    source={require('./goodVibes.jpg')} // No `=` sign and `{}` around `require`
    style={styles.image}
  />
  <View style={{ height: 20 }} /> {/* This acts as a line break */}
  
      <Text style={styles.title}>What should I Eat Today</Text>
      <View style={{ height: 10 }} /> {/* This acts as a line break */}
      <Text style={styles.paragraph}>
        Have you ever been in a dilemma where your extremely hungry and you just don't know
        what to eat. You have many places in mind but you can go for pretty much about anything.
        Or have you ever been with friends or family and the whold group just can make
        an collective decision on what to eat. You just need something to decide for you. This 
        happens to the best of us. TRUST ME. 
        </Text>
        <View style={{ height: 10 }} /> {/* This acts as a line break */}
      <Text style={styles.paragraph}>
        This is where my app comes into place. On the tab labled "Let's eat", you will have the 
        option to input a list of your favorite choices to eat and I will just choose for you. 
        No ai, nor nothing to advanced about it. Just a simple random selection tool to help you
        any you group decide on what to eat. You can input up to 10 items. After that just hit 
        "select for me" and poof, you have your choice for the day. No fuss, no drama, just plain
        and simple. Enjoy !!!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 200,  // Adjust width as needed
    height: 250, // Adjust height as needed
    marginBottom: 16,
    marginTop: -100
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'left',
    color: '#666',
  },
  horizontalRule: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
});