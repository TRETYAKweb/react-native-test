import { useState } from "react";
import { TextInput, Button, View, Modal, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

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
    <>
      <Modal visible={isModalOpen} animationType="slide">
        <View style={styles.inputContainet}>
          <Image
            style={styles.image}
            source={require("../../../assets/images/goal.png")}
          />

          <TextInput
            style={styles.textInput}
            onChangeText={goalInputHandler}
            placeholder="Add course goal"
            value={enteredGoalText}
          />
          <View style={styles.btnContainet}>
            <View style={styles.button}>
              <Button onPress={onCancle} title="Cancel" color={"#E65D5C"} />
            </View>
            <View style={styles.button}>
              <Button
                onPress={addGoalHandler}
                title="Add goal"
                color={"#000000"}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};
