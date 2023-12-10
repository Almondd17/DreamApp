import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from "@react-navigation/native";

const ProfileTopBar = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.moreButton}>
                <MaterialIcons name="more-vert" size={40} color={'#333'} />
            </TouchableOpacity>
            <View style={styles.profileInfoContainer}>
                <View style={styles.profileIcon}>
                    <Image
                        source={{}} style={{ width: 80, height: 80, borderRadius: 50 }}
                    />
                </View>            
                <TouchableOpacity style={styles.boxContainer}>
                    <Text style={styles.infoValue}>123</Text>
                    <Text style={styles.infoText}>Dreams</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxContainer}>
                    <Text style={styles.infoValue}>456</Text>
                    <Text style={styles.infoText}>Friends</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.username}>Your Username {/* username */}</Text>
                <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.editButtonText}>Edit Profile</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("CreatePostModal")} style={styles.createPostButton}>
                <MaterialIcons size={45} name="create" color={'#DDA0DD'}></MaterialIcons>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.35,
        padding: 25,
    },
    contentContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    profileInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileIcon: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#333',
        marginBottom: 10,
        overflow: "hidden",
    },
    boxContainer: {
        alignItems: 'center',
        marginLeft: 45,
    },
    infoValue: {
        fontSize: 16, // Adjust the font size as needed
        color: "#333",
    },
    infoText: {
        fontSize: 16, // Adjust the font size as needed
        color: "#333",
    },
    username: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
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
    createPostButton: {
        position: "absolute",
        bottom: 10,
        right: 22.5,
    },
});

export default ProfileTopBar;
