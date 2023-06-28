import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [coursGoals, setCoursGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setCoursGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  };

  const coursGoalsJSX = coursGoals.map((goal, idx) => (
    <View style={styles.goalItem} key={idx}>
      <Text style={styles.goalText}>{goal}</Text>
    </View>
  ));

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainet}>
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="add course goal"
        />
        <Button onPress={addGoalHandler} title="Add goal" />
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.goalsTitle}>List of goals...</Text>
        <ScrollView>{Array.isArray(coursGoals) && coursGoalsJSX}</ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainet: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsTitle: {
    fontSize: 24,
    color: "#2D414C",
    marginBottom: 15,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    padding: 10,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#BDD630",
    backgroundColor: "#2D414C",
    margin: 5,
  },
  goalText: {
    color: "#ffffff",
    fontSize: 14,
  },
});
