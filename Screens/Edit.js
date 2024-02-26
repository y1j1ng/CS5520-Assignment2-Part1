import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AddAnActivity from "./AddAnActivity";

export default function Edit({ route }) {
  const { id } = route.params;

  return <AddAnActivity isEdit={true} id={id} />;
}
