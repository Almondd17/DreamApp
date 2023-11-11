import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import ProfileTopBar from "../components/ProfileTopBar";
import ProfileMiddleBar from "../components/ProfileMiddleBar";
import ProfileContent from "../components/ContentCollection";

const ProfileScreen = () => {
    return (
      <View style={styles.container}>
        <ProfileTopBar />
        <ProfileMiddleBar />
        <ProfileContent />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ProfileScreen;