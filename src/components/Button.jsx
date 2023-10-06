import React from 'react'

import { View, Text } from 'react-native'

import { StyleSheet } from 'react-native'

import { string } from 'prop-types';

const styles = StyleSheet.create({

buttonContainer: {
backgroundColor: '#467fd3',
borderRadius: 4,
alignSelf: 'flex-start',
marginBottom: 24,
},
buttonLabel: {
fontSize: 16,
lineHeight: 32,
paddingVertical: 8,
paddingHorizontal: 32,
color: '#ffffff',
},
});

Button.proptypes = {
text: string.isRequired,
};

export default function Button(props) {
    const {text} = props;

    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonLabel}>{text}</Text>
        </View>
    )
}
