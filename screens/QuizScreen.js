import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const QUESTIONS = [
  {
    id: '1',
    question: 'What does a Class 4 cyclone warning mean in Mauritius?',
    options: [
      'A cyclone is in the region but not yet a threat',
      'Winds are expected within 24 hours',
      'Extremely dangerous winds are occurring or imminent',
      'The cyclone has passed and it is safe to go out',
    ],
    correct: 2,
  },
  {
    id: '2',
    question: 'How many days of water should you store before a cyclone?',
    options: ['1 day', '3 days', '1 week', '2 weeks'],
    correct: 1,
  },
  {
    id: '3',
    question: 'Which organisation issues official cyclone warnings in Mauritius?',
    options: ['NDRRMC', 'Red Cross', 'Mauritius Meteorological Services', 'Ministry of Health'],
    correct: 2,
  },
  {
    id: '4',
    question: 'What should you do with loose outdoor furniture before a cyclone?',
    options: [
      'Leave it outside as normal',
      'Secure or bring it indoors',
      'Cover it with a tarpaulin',
      'Move it to the roof',
    ],
    correct: 1,
  },
  {
    id: '5',
    question: 'During a Class 3 warning, where should you be?',
    options: [
      'Outside monitoring the situation',
      'In your car ready to evacuate',
      'Indoors and away from windows',
      'At the beach watching the waves',
    ],
    correct: 2,
  },
];

export default function QuizScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuestion = QUESTIONS[currentIndex];

  const handleAnswer = (index) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    if (index === currentQuestion.correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < QUESTIONS.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  };

  const getOptionStyle = (index) => {
    if (selectedAnswer === null) return styles.option;
    if (index === currentQuestion.correct) return [styles.option, styles.optionCorrect];
    if (index === selectedAnswer) return [styles.option, styles.optionWrong];
    return styles.option;
  };

  const getOptionTextStyle = (index) => {
    if (selectedAnswer === null) return styles.optionText;
    if (index === currentQuestion.correct) return [styles.optionText, styles.optionTextHighlight];
    if (index === selectedAnswer) return [styles.optionText, styles.optionTextHighlight];
    return styles.optionText;
  };

  if (finished === true) {
    let feedback = '';
    if (score === 5) {
      feedback = 'You are fully prepared.';
    } else if (score >= 3) {
      feedback = 'Good effort! Review the areas you missed.';
    } else {
      feedback = 'Keep studying, your safety depends on it.';
    }

    return (
      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Text style={styles.title}>Quiz Complete</Text>
          <View style={styles.resultCard}>
            <Text style={styles.resultScore}>{score} / {QUESTIONS.length}</Text>
            <Text style={styles.resultLabel}>Correct Answers</Text>
            <Text style={styles.resultFeedback}>{feedback}</Text>
          </View>
          <TouchableOpacity style={styles.restartBtn} onPress={handleRestart}>
            <Text style={styles.restartBtnText}>Try Again</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Cyclone Safety Quiz</Text>
        <Text style={styles.subtitle}>Question {currentIndex + 1} of {QUESTIONS.length}</Text>
        <View style={styles.progressRow}>
          {QUESTIONS.map((q, i) => (
            <View
              key={q.id}
              style={[styles.dot, i < currentIndex && styles.dotDone, i === currentIndex && styles.dotActive]}
            />
          ))}
        </View>
        <View style={styles.questionCard}>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
        </View>
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={getOptionStyle(index)}
            onPress={() => handleAnswer(index)}
          >
            <Text style={getOptionTextStyle(index)}>{option}</Text>
          </TouchableOpacity>
        ))}
        {selectedAnswer !== null && (
          <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
            <Text style={styles.nextBtnText}>
              {currentIndex + 1 === QUESTIONS.length ? 'See Results' : 'Next Question'}
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  scroll: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#aaaaaa',
    marginBottom: 16,
  },
  progressRow: {
    flexDirection: 'row',
    marginBottom: 24,
    gap: 8,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#16213e',
    borderWidth: 1,
    borderColor: '#444',
  },
  dotDone: {
    backgroundColor: '#2ecc71',
    borderColor: '#2ecc71',
  },
  dotActive: {
    backgroundColor: '#e94560',
    borderColor: '#e94560',
  },
  questionCard: {
    backgroundColor: '#16213e',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  questionText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#ffffff',
    lineHeight: 26,
  },
  option: {
    backgroundColor: '#16213e',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#444',
  },
  optionCorrect: {
    borderColor: '#2ecc71',
    backgroundColor: '#1a3a2a',
  },
  optionWrong: {
    borderColor: '#e94560',
    backgroundColor: '#3a1a1a',
  },
  optionText: {
    color: '#ffffff',
    fontSize: 15,
  },
  optionTextHighlight: {
    fontWeight: '700',
  },
  nextBtn: {
    backgroundColor: '#e94560',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  nextBtnText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 16,
  },
  resultCard: {
    backgroundColor: '#16213e',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 16,
  },
  resultScore: {
    fontSize: 64,
    fontWeight: '800',
    color: '#e94560',
  },
  resultLabel: {
    fontSize: 16,
    color: '#aaaaaa',
    marginBottom: 16,
  },
  resultFeedback: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 24,
  },
  restartBtn: {
    backgroundColor: '#16213e',
    borderWidth: 1,
    borderColor: '#e94560',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  restartBtnText: {
    color: '#e94560',
    fontWeight: '700',
    fontSize: 16,
  },
});
