import React from 'react'

import { View, Text, StyleSheet, TextInput } from 'react-native'
import AppBar from '../components/AppBar';
import Button from '../components/Button';

import { TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f0f4f0',
},
inner: {
paddingHorizontal: 30,
paddingVertical: 30,
},
title: {
fontSize: 24,
lineHeight: 32,
fontWeight: 'bold',
marginBottom: 24,
},
input: {
fontSize: 16,
height: 48,
borderColor: '#dddddd',
borderWidth: 1,
backgroundColor: '#ffffff',
paddingHorizontal: 8,
marginBottom: 16,
},

footerLink: {
fontSize: 14,
lineHeight: 24,
color: '#467fd3',
},
footer: {
flexDirection: 'row',
}
});

export default function SignUpScreen() {
    return (
        <View style={styles.container}>

            <AppBar />

            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput value='email' style={styles.input} />
                <TextInput value='password' style={styles.input} />

                <Button text='Sign Up' />

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already Register?</Text>

                    <TouchableOpacity>
                        <Text style={styles.footerLink}>Log In Here.</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    )
}
