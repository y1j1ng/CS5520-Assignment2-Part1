import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ActivityItem from "./ActivityItem";
import { EntriesContext } from "./EntriesContext";
import { Color } from "../Helpers/Color";

export default function ActivitiesList({ specialOnly, navigation }) {
  const { entries, setEntries } = useContext(EntriesContext);

  // Filter entries based on specialOnly prop
  const filteredEntries = specialOnly
    ? entries.filter((entry) => entry.special)
    : entries;

  const renderItem = ({ item }) => (
    <ActivityItem
      activity={item.activity}
      duration={item.duration}
      date={item.date}
      special={item.special}
      navigation={navigation}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredEntries} // Use filtered entries based on specialOnly prop
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
  },
});
