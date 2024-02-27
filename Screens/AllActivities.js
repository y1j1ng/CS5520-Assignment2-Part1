import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ActivitiesList from "../Components/ActivitiesList";
import { Color } from "../Helpers/Color";

export default function AllActivities({ navigation }) {
  return (
    <View style={styles.container}>
      <ActivitiesList specialOnly={false} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
  },
});
