import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, SafeAreaView } from "react-native";

const CreatePost = () => {
    const [dreamTitle, setDreamTitle] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (newValue) => {
        if (newValue.length < 18) {
            setDreamTitle(newValue);
            setError('');
        } else {
            setError('Too many letters, boo');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Writing your dream</Text>
            <Text style={styles.guideText}>Enter dream-post title:</Text>
            <TextInput 
                style={styles.textInput}
                placeholder="MyDream"
                placeholderTextColor={'lightgrey'}
                value={dreamTitle}
                onChangeText={handleInputChange}
            ></TextInput>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white', 
    },
    pageTitle: {
        textAlign: 'center',
        color: '#FFC3C3',
        fontSize: 30,
        margin: 20,
        fontFamily: 'Gluten-Bold'
    },
    guideText: {
        color: '#A79AFF',
    },
    textInput: {
        fontSize: 15,
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#D3D3D3',
        borderRadius: 5,
        width: 250,
        height: 40,
        padding: 5,
        padding: 10,
        marginTop: 10,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        color: "#FFFF97",
        textShadowColor: "#000", //Text outline color
        textShadowOffset: { width: 1, height: 0.5 },
        textShadowRadius: 5,
    },
    errorText: {
        color: '#A79AFF',
        marginTop: 5,
    },
});
export default CreatePost;
