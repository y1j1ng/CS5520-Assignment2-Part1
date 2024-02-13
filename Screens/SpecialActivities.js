import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ActivitiesList from "../Components/ActivitiesList";
import { Color } from "../Helpers/Color";

export default function SpecialActivities() {
  return (
    <View style={styles.container}>
      <ActivitiesList specialOnly={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
  },
});
