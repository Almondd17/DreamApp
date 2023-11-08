import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const ProfileMiddleBar = () => {
    return(
        <View style={styles.container}>
            <Text>Middle bar</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 0.1,
      borderWidth: 1,
      borderColor: 'black',
    }
});

export default ProfileMiddleBar;