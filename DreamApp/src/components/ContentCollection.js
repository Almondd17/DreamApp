import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

const ProfileContent = () => {
    return(
        <View style={styles.container}>
            <Text>content</Text>
        </View>
    );
}

styles = StyleSheet.create({
    container: {
        flex: 0.7,
        display: "grid",
        borderWidth: 1,
        borderColor: 'black',
    }
});

export default ProfileContent;