import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ContentBox = () => {
    return (
        <View style={styles.container}>
            <Text>content box</Text>
        </View>
    );
}

styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
    }
});