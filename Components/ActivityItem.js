import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { convertDateToString } from "../Helpers/Helper";
import { Color } from "../Helpers/Color";

export default function ActivityItem({
  id,
  activity,
  duration,
  date,
  special,
  navigation,
}) {
  function onPress() {
    navigation.navigate("Edit", { id: id });
  }
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.activity}>{activity}</Text>
        <View style={styles.rightSection}>
          {special && (
            <View style={styles.imageView}>
              <Image
                source={require("../assets/warning.png")}
                style={styles.image}
              />
            </View>
          )}
          <Text style={styles.boxText}>{date.toDate().toDateString()}</Text>
          <Text style={styles.boxText}>{duration} min</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  activity: {
    flex: 1,
    textAlign: "left",
    fontSize: 18,
    fontWeight: "bold",
    color: "thistle",
    padding: 5,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  boxText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: Color.general,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  container: {
    borderRadius: 10,
    backgroundColor: Color.general,
    margin: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    height: 25,
    width: 25,
  },
  imageView: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  rightSection: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 5,
  },
});
