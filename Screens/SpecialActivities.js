import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ActivitiesList from "../Components/ActivitiesList";

export default function SpecialActivities() {
  return (
    <View>
      <ActivitiesList specialOnly={true} />
    </View>
  );
}

const styles = StyleSheet.create({});
