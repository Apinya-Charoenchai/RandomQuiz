// LeaderboardScreen.tsx
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const Leaderboard = () => {
  const leaderboardData = [
    { name: 'Player 1', score: 100 },
    { name: 'Player 2', score: 90 },
    { name: 'Player 3', score: 80 },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}} style={styles.leaderButton}>
        <Text style={styles.leaderButtonText}>Leaderboard</Text>
      </TouchableOpacity>
      {leaderboardData.map((entry, index) => (
        <View key={index} style={styles.entry}>
            <View style={styles.rewardContainer}>
              <Icon name="trophy" size={30} color="#FFD700" style={styles.rewardIcon} />
            </View>
            <Text>{`${index + 1}. ${entry.name}: ${entry.score}`}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    color: '#333333',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  entry: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rewardIcon: {
    marginRight: 10,
  },
  rewardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  leaderButton: {
    marginVertical: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    backgroundColor: '#28a745',
  },
  leaderButtonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Leaderboard;
