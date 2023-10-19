import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfileTopBar from "../components/ProfileTopBar";
import Content from "../components/ContentCollection";

const ProfileScreen = () => {
    return (
      <View style={styles.container}>
        <ProfileTopBar />
        <Content />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});

export default ProfileScreen;