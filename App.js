import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ColorChanger = () => {
  const [bgColor, setBgColor] = useState("green"); // Initial background color

  const changeBackgroundColor = (color) => {
    setBgColor(color); // Change state when button is pressed
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "green" }]}
        onPress={() => changeBackgroundColor("green")}
      >
        <Text style={styles.buttonText}>GREEN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "blue" }]}
        onPress={() => changeBackgroundColor("blue")}
      >
        <Text style={styles.buttonText}>BLUE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "brown" }]}
        onPress={() => changeBackgroundColor("brown")}
      >
        <Text style={styles.buttonText}>BROWN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "yellow" }]}
        onPress={() => changeBackgroundColor("yellow")}
      >
        <Text style={[styles.buttonText, { color: "black" }]}>YELLOW</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "red" }]}
        onPress={() => changeBackgroundColor("red")}
      >
        <Text style={styles.buttonText}>RED</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "black" }]}
        onPress={() => changeBackgroundColor("black")}
      >
        <Text style={[styles.buttonText, { color: "white" }]}>BLACK</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ColorChanger;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  button: {
    width: "80%",
    padding: 20,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
