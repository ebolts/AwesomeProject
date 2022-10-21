import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.listElement}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        // style feedback for IOS
        style={(pressed) => pressed && styles.pressedItem}
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
    backgroundColor: "#cccccc",
    margin: 5,
  },
  pressedItem: {
    opacity: 0.5,
  },
  listElementText: {
    color: "Black",
    padding: 8,
  },
});
