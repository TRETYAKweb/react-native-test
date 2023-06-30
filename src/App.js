import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import { GoalInput, GoalItem } from "./components";

export default function App() {
  const [coursGoals, setCoursGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setCoursGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { data: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = (id) => {
    setCoursGoals((currentCourseGoals) =>
      currentCourseGoals.filter((it) => it.id !== id)
    );
  };

  const renderItem = ({ item }) => {
    return (
      <GoalItem
        data={item.data}
        id={item.id}
        onDeleteGoal={deleteGoalHandler}
      />
    );
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <Text style={styles.goalsTitle}>List of goals...</Text>
        <FlatList
          data={coursGoals}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
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
  goalsTitle: {
    fontSize: 24,
    color: "#2D414C",
    marginBottom: 15,
  },
  goalsContainer: {
    flex: 5,
  },
});
