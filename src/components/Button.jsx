import React from 'react'

import { View, Text } from 'react-native'

import { StyleSheet } from 'react-native'

import { string } from 'prop-types';

import { TouchableOpacity } from 'react-native';

import { func } from 'prop-types';

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
onPress: func,
};

Button.defaultProps = {
onPress: null,
};

export default function Button(props) {
    const {text, onPress} = props;

    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <Text style={styles.buttonLabel}>{text}</Text>
        </TouchableOpacity>
    )
}
