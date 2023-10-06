import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { string, shape } from 'prop-types';

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        backgroundColor: 'blue',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 16,
    }
});

Hello.proptypes = {
    children: string.isRequired,
    style: shape(),
};

Hello.defaultProps = {
    style: null,
};

function Hello (props) {
    const {children, style} = props;

    return (
        <View>
            <Text style={[styles.text, style]}>
                {`Hello ${children}`}
            </Text>
        </View>
    );
}

export default Hello;
