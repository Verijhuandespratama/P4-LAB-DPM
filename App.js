import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import TeamScore from './components/TeamScore';

const App = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  // Function to check if a team has won
  const checkWinner = (score, teamName) => {
    if (score === 10) {
      Alert.alert('Game Over', `${teamName} Wins!`);
    }
  };

  // Handlers for Team A
  const increaseScoreA = () => {
    const newScore = scoreA + 1;
    setScoreA(newScore);
    checkWinner(newScore, 'Team A');
  };

  const decreaseScoreA = () => {
    if (scoreA > 0) {
      setScoreA(scoreA - 1);
    }
  };

  // Handlers for Team B
  const increaseScoreB = () => {
    const newScore = scoreB + 1;
    setScoreB(newScore);
    checkWinner(newScore, 'Team B');
  };

  const decreaseScoreB = () => {
    if (scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  // Function to reset scores
  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚽ Futsal Score App ⚽</Text>

      <TeamScore
        teamName="INDONESIA"
        score={scoreA}
        onIncrease={increaseScoreA}
        onDecrease={decreaseScoreA}
      />

      <TeamScore
        teamName="MALAYSIA"
        score={scoreB}
        onIncrease={increaseScoreB}
        onDecrease={decreaseScoreB}
      />

      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3f2fd', // Light blue background
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#0d47a1', // Dark blue for title
    textAlign: 'center',
    textShadowColor: '#90caf9',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  resetButton: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: '#d32f2f', // Red background for reset button
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Shadow for Android
  },
  resetButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
