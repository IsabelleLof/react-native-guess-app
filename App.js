import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity } from 'react-native';

//The states

export default function App() {
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [number, setNumber] = useState(Math.floor(Math.random() * 10) + 1);

  const handleGuess = () => {
    const numGuess = parseInt(guess);
    if (isNaN(numGuess)) {
      Alert.alert('Ogiltig gissning', 'Vänligen ange ett giltigt nummer.');
      return;
    }

    if (numGuess < number) {
      setFeedback('För lågt!');
    } else if (numGuess > number) {
      setFeedback('För högt!');
    } else {
      setFeedback('Rätt gissat!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gissningslek</Text>
      <TextInput
        style={styles.input}
        placeholder="Ange din gissning"
        keyboardType="numeric"
        onChangeText={text => setGuess(text)}
        value={guess}
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.button} onPress={handleGuess}>
        <Text style={styles.buttonText}>Gissa</Text>
      </TouchableOpacity>
      {feedback !== '' && <Text style={styles.feedback}>{feedback}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fffacd', // Light yellow background
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#ffb700', // Deep yellow color
  },
  input: {
    height: 40,
    borderColor: '#ffb700', // Deep yellow border
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '80%',
    textAlign: 'center',
    backgroundColor: '#fff8dc', // Cornsilk background
  },
  button: {
    backgroundColor: '#ffd700', // Gold color
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  feedback: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    color: '#daa520', // Goldenrod color
  },
});



// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, Button } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start w </Text>
//       <StatusBar style="auto" />
//       <Button
//         title="Learn More"
//         color="#841584"
//         accessibilityLabel="Learn more about this purple button"
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   myStyle: {
//     backgroundColor: "#ff0000",
//   },
// });

//camelCase
