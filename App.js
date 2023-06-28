import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

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
    <Text key={idx}>{goal}</Text>
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
        <Text>List of goals...</Text>
        <View>{Array.isArray(coursGoals) && coursGoalsJSX}</View>
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
  goalsContainer: {
    flex: 5,
  },
});
