import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ContentBox from "./ContentBox";

const Contents = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === "bed" && styles.selectedButton
          ]}
          onPress={() => handleButtonPress("bed")}
        >
          <MaterialCommunityIcons name="bed" size={25} color="gold" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === "heart" && styles.selectedButton
          ]}
          onPress={() => handleButtonPress("heart")}
        >
          <MaterialCommunityIcons name="heart" size={25} color="red" />
        </TouchableOpacity>
      </View>
      <ContentBox selectedButton={selectedButton}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    flexDirection: "column",
    borderWidth: 2,
    borderColor: "black",
  },
  topBar: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
  },
  button: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  selectedButton: {
    borderBottomWidth: 2,
    borderBottomColor: "purple",
  },
});

export default Contents;
