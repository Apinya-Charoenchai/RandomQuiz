// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuestionScreen from './src/components/AppScreen';
import LeaderboardScreen from './src/components/LeaderboardScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Question" component={QuestionScreen} options={{ title: 'Question' }} />
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen} options={{ title: 'Leaderboard' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
