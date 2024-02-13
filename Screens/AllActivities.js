import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ActivitiesList from "../Components/ActivitiesList";
import { Color } from "../Helpers/Color";

export default function AllActivities() {
  return (
    <View style={styles.container}>
      <ActivitiesList specialOnly={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
  },
});
