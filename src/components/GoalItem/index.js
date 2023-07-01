import { View, Text, Pressable } from "react-native";

import { styles } from "./style";

export const GoalItem = ({ data, id, onDeleteGoal }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#4E7990" }}
        onPress={onDeleteGoal.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{data}</Text>
      </Pressable>
    </View>
  );
};
