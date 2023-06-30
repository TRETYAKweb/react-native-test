import { useState } from "react";
import { TextInput, Button, View } from "react-native";

import { styles } from "./style";

export const GoalInput = ({ onAddGoal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    enteredGoalText.length && onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <View style={styles.inputContainet}>
      <TextInput
        style={styles.textInput}
        onChangeText={goalInputHandler}
        placeholder="add course goal"
        value={enteredGoalText}
      />
      <Button onPress={addGoalHandler} title="Add goal" />
    </View>
  );
};
