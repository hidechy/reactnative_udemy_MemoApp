import React from 'react'

import { StyleSheet, Text, View } from 'react-native';

import { string } from 'prop-types';

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
text: string.isRequired,
};

export default function CircleButton(props){
const {text} = props;

return (
<View style={styles.circleButton}>
<Text style={styles.circleButtonLabel}>{text}</Text>
</View>
)
}
