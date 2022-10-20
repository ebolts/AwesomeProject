import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enterGoalText, setEnteredGoalText] = useState("");

  function addGoalHandler() {
    props.onAddGoal(enterGoalText);
    setEnteredGoalText("");
  }

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder=" My goal is..."
        onChangeText={goalInputHandler}
        value={enterGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 5,
  },
});
