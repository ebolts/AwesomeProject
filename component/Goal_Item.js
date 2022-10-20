import { StyleSheet, View, Text } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.listElement}>
      <Text style={styles.listElementText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  listElement: {
    borderRadius: 6,
    backgroundColor: "#cccccc",
    padding: 8,
    margin: 5,
  },
  listElementText: {
    color: "Black",
  },
});
