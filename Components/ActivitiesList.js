import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ActivityItem from "./ActivityItem";
import { EntriesContext } from "../App";

export default function ActivitiesList() {
  const { entries, setEntries } = useContext(EntriesContext);
  const renderItem = ({ item }) => (
    <Text>{`Activity: ${item.activity}, Duration: ${item.duration}, Date: ${item.date}`}</Text>
  );

  return (
    <View>
      <FlatList
        data={entries}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
