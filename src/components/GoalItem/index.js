import { View, Text, Pressable } from "react-native";

import { styles } from "./style";

export const GoalItem = ({ data, id, onDeleteGoal }) => {
  return (
    <Pressable onPress={onDeleteGoal.bind(this, id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{data}</Text>
      </View>
    </Pressable>
  );
};
