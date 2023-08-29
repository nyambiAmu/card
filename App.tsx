import React from 'react';
import { View, StyleSheet } from 'react-native';
import BirthdayCard from './Componets/BirthdayCard';

const App = () => {
  return (
    <View style={styles.container}>
      <BirthdayCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default App;

