import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ContentBox = ({ selectedButton }) => {
  let contentText = "content";

  if (selectedButton === "bed") {
    contentText = "This is the bed content.";
  } else if (selectedButton === "heart") {
    contentText = "This is the heart content.";
  }

  return (
    <View style={styles.container}>
      <Text>{contentText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    flexDirection: "column",
    borderRightWidth: 1,
  },
});

export default ContentBox;
