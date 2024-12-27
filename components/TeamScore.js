import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TeamScore = ({ teamName, score, onIncrease, onDecrease }) => {
  return (
    <View style={styles.teamContainer}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttonRow}>
        <Button title="+" onPress={onIncrease} />
        <Button title="-" onPress={onDecrease} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  teamContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  teamName: {
    fontSize: 20,
    marginBottom: 10,
  },
  score: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
  },
});

export default TeamScore;
