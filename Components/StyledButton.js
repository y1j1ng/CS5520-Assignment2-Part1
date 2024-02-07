import { Button, View } from "react-native";
import React from "react";

export default function StyledButton({ title, onPress, color }) {
  return (
    <View style={{ margin: 5, width: "auto" }}>
      <Button title={title} onPress={onPress} color={color} />
    </View>
  );
}
