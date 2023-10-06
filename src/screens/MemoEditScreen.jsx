import React from 'react'

import { View, Text, StyleSheet, TextInput } from 'react-native'

import AppBar from '../components/AppBar';

import CircleButton from '../components/CircleButton';

import { KeyboardAvoidingView } from 'react-native';

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f0f4f0',
},
inputContainer: {
paddingHorizontal: 30,
paddingVertical: 30,
flex: 1,
},
input: {
flex: 1,
textAlignVertical: 'top',
fontSize: 16,
lineHeight: 24,
}

});

export default function MemoEditScreen() {
    return (
        <KeyboardAvoidingView style={styles.container} behavior='height'>

            <AppBar />

            <View style={styles.inputContainer}>
                <TextInput
                value='買い物リスト'
                multiline
                style={styles.input}
                />
            </View>

            <CircleButton name='check' />
            
        </KeyboardAvoidingView>
    )
}
