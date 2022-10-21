import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.listElement}>
      <Pressable
        android_ripple={{ color: "#22015e" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.listElementText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  listElement: {
    borderRadius: 6,
    backgroundColor: "#3f02ad",
    margin: 5,
  },
  listElementText: {
    color: "white",
    padding: 8,
  },
});
