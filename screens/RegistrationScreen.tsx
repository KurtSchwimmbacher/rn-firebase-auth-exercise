// TODO: Create Register Screen & Register Functionality
import { TextInput, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { registerUser } from '../services/authService';
import { Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../services/types'; 

const RegistrationScreen = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    // TODO: Register function
    const register = () => {
        // console.log("Registering user")
        registerUser(email, password);
    }

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.container}>
                <Text style={styles.title}>Register</Text>

                <TextInput
                    style={styles.inputField}
                    placeholder="Your Email"
                    onChangeText={newText => setEmail(newText)}
                    defaultValue={email}
                />
        
                <TextInput
                    style={styles.inputField}
                    placeholder="Your Password"
                    onChangeText={newText => setPassword(newText)}
                    defaultValue={password}
                    secureTextEntry={true}
                    />
        
                <TouchableOpacity style={styles.button} onPress={register}>
                    <Text style={styles.buttonText}>Register Button</Text>
                </TouchableOpacity>

                {/* todo : Nav to login */}
                <View>
                    <Text>
                       Already have an account?
                    </Text>
                    <Button onPress={() => navigation.navigate('Login')} title='Login' />
                </View>
                
            </View>
        </SafeAreaView>
    )
}

export default RegistrationScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    title: {
        fontSize: 30
    },
    inputField: {
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 15,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: "black",
        textAlign: 'center',
        padding: 10,
        marginTop: 30
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    }
})