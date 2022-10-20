import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./component/Goal_Item";
import GoalInput from "./component/Goal_Input";
export default function App() {
  const [goals, setGoals] = useState([]);

  function addGoalHandler(enterGoalText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enterGoalText, key: Math.random().toString() },
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
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
  goalsContainer: {
    flex: 5,
  },
});
