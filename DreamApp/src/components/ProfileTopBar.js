import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const ProfileTopBar = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.moreButton}>
                <MaterialIcons name="more-vert" size={40} color={'#5A4FCF'} />
            </TouchableOpacity>
            <View style={styles.profileContainer}>
                <View style={styles.profileIcon}>
                    <Image
                        source={{}} style={{ width: 80, height: 80, borderRadius: 50 }}
                    />
                </View>
                <View style={styles.dreamsContainer}>
                    <Text style={styles.dreamsValue}>123</Text>
                    <Text style={styles.dreamsText}>Dreams</Text>
                </View>
                <View style={styles.friendsContainer}>
                    <Text style={styles.friendsValue}>456</Text>
                    <Text style={styles.friendsText}>Friends</Text>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.username}>Your Username {/* username */}</Text>
                <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.editButtonText}>Edit Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        padding: 25,
    },
    contentContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileIcon: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#5A4FCF',
        marginBottom: 10,
        overflow: "hidden",
    },
    dreamsContainer: {
        marginLeft: 30,
        alignItems: 'center',
    },
    dreamsValue: {
        fontSize: 16, // Adjust the font size as needed
        color: "#720e9e",
    },
    dreamsText: {
        fontSize: 16, // Adjust the font size as needed
        color: "#720e9e",
    },
    friendsContainer: {
        marginLeft: 30,
        alignItems: 'center',
    },
    friendsValue: {
        fontSize: 16, // Adjust the font size as needed
        color: "#720e9e",
    },
    friendsText: {
        fontSize: 16, // Adjust the font size as needed
        color: "#720e9e",
    },
    username: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#720e9e",
    },
    editButton: {
        backgroundColor: "#DDA0DD", // Use a color that fits your design
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 10,
    },
    editButtonText: {
        color: "purple",
        fontSize: 16,
    },
    moreButton: {
        position: "absolute",
        top: 10,
        right: 10,
    },
});

export default ProfileTopBar;
