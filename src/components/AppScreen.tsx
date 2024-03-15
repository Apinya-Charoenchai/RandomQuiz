// QuestionScreen.tsx
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import he from 'he';

type Question = {
  question: string;
  answers: string[];
  correctAnswer: string;
};

const QuestionScreen = ({ navigation }: { navigation: any }) => {
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    const fetchRandomQuestions = async () => {
      try {
        const response = await fetch('https://opentdb.com/api.php?amount=20&type=multiple');
        const data = await response.json();

        const fetchedQuestions: Question[] = data.results.map((result: any) => {
          const question = he.decode(result.question); 
          const correctAnswer = he.decode(result.correct_answer);
          const incorrectAnswers = result.incorrect_answers.map((answer: string) => he.decode(answer));
          const answers = [...incorrectAnswers, correctAnswer];
          answers.sort(() => Math.random() - 0.5);
          return {
            question,
            answers,
            correctAnswer
          };
        });

        setQuestions(fetchedQuestions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchRandomQuestions();
 
  }, []);

  const handleAnswer = (question: any, selectedAnswer: string) => {
    console.log('question ', question);
    console.log('selectedAnswer ', selectedAnswer);
  };

  const handleNavigate = () => {
    navigation.navigate('Leaderboard');
  };
  return (

  <ScrollView contentContainerStyle={styles.container}>
    {questions.map((question, index) => (
      <View key={index} style={styles.questionContainer}>
        <Text style={styles.questionText}>{question.question}</Text>
        {question.answers.map((answer: string, idx: number) => (
          <TouchableOpacity 
            key={idx} 
            onPress={() => handleAnswer(question, answer)} 
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>{answer}</Text>
          </TouchableOpacity>
        ))}
        {index !== questions.length - 1 && <View style={styles.divider} />}
      </View>
    ))}
   
    <TouchableOpacity onPress={handleNavigate} style={styles.leaderButton}>
      <Text style={styles.leaderButtonText}>Leaderboard</Text>
    </TouchableOpacity>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  questionContainer: {
    marginBottom: 40,
  },
  questionText: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  buttonContainer: {
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#007bff',
    alignSelf: 'stretch', 
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
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
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
});

export default QuestionScreen;
