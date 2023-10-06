import React from 'react'

import { StyleSheet } from 'react-native';

import { string } from 'prop-types';

import { shape } from 'prop-types';

import { Feather } from '@expo/vector-icons';

import { func } from 'prop-types';

import { TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({

circleButton: {
backgroundColor: '#467fd3',
width: 64,
height: 64,
borderRadius: 32,
justifyContent: 'center',
alignItems: 'center',
position: 'absolute',
right: 40,
bottom: 40,

/* ios */
shadowColor: '#000000',
shadowOffset: {width: 0, height: 8},
shadowOpacity: 0.25,
shadowRadius: 8,

/* android */
elevation: 8,
},
circleButtonLabel: {
color: '#ffffff',
fontSize: 16,
}
});

CircleButton.proptypes = {
style: shape(),
name: string.isRequired,
onPress: func,
};

CircleButton.defaultProps = {
style: null,
onPress: null,
};

export default function CircleButton(props){
const {style, name, onPress} = props;

return (
<TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
<Feather name={name} size={32} color='white' />
</TouchableOpacity>
)
}
