import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ActivitiesList from "../Components/ActivitiesList";
import { Color } from "../Helpers/Color";

export default function SpecialActivities({ navigation }) {
  return (
    <View style={styles.container}>
      <ActivitiesList specialOnly={true} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
  },
});
