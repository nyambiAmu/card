import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BirthdayCard = () => {
  const [greetingMessage, setGreetingMessage] = useState('');

  const handleInputChange = (text) => {
    setGreetingMessage(text);
  };

  return (
    <View style={[styles.cardContainer, styles.pinkBackground]}>
      <Text style={styles.headerText}>Happy Birthday!</Text>
      <TextInput
        style={[styles.input, styles.mediumText]} 
        placeholder="Enter your greeting message"
        onChangeText={handleInputChange}
        value={greetingMessage}
      />
      <Text style={styles.messageText}>{greetingMessage}</Text>
      <Button title="Send" onPress={() => alert('Greeting sent!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  pinkBackground: {
    backgroundColor: 'pink',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  mediumText: {
    fontSize: 20, 
  },
  messageText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default BirthdayCard;
