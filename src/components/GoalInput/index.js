import { useState } from "react";
import { TextInput, Button, View, Modal } from "react-native";

import { styles } from "./style";

export const GoalInput = ({ onAddGoal, onCancle, isModalOpen }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    enteredGoalText.length && onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={isModalOpen} animationType="slide">
      <View style={styles.inputContainet}>
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="add course goal"
          value={enteredGoalText}
        />
        <View style={styles.btnContainet}>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add goal" />
          </View>
          <View style={styles.button}>
            <Button onPress={onCancle} title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
};
