import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { Color } from "../Helpers/Color";

export default function PressableButton({
  backgroundColor = Color.general,
  onPress,
  children,
}) {
  return (
    <Pressable
      style={[styles.defaultStyle, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={styles.defaultText}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    margin: 10,
    width: 120,
    height: 30,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  defaultText: {
    fontSize: 18,
    color: "white",
  },
});
