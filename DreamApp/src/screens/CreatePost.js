import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, SafeAreaView, Button } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

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
            <View style={styles.inputsContainer}>
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
            <View style={styles.inputsContainer}>
                <Text style={styles.guideText}>Where did your dream occur?</Text>
                <BouncyCheckbox 
                    style={styles.checkbox}
                    text="Familiar place?"
                    size={25}
                    fillColor="#9ebdd0"
                    innerIconStyle={{ borderWidth: 4 }}
                /> 
                <BouncyCheckbox
                    style={styles.checkbox} 
                    text="Somewhere completely new"
                    size={25}
                    fillColor="#9ebdd0"
                    innerIconStyle={{ borderWidth: 4 }}
                />
                <Text></Text>
                <Button title="Add place"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white', 
    },
    inputsContainer: {
        alignItems: 'center',
        margin: 10,
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
    checkbox: {
        padding: 5,
        margin: 5,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
    },
});
export default CreatePost;
