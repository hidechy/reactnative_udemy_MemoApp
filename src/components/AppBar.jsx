import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({

appBar: {
width: '100%',
height: 104,
backgroundColor: '#467fd3',
justifyContent: 'flex-end',
},
appBarInner: {
alignItems: 'center',
},
appBarRight: {
position: 'absolute',
right: 20,
bottom: 10,
color: 'rgba(255,255,255, 0.8)',
},
appBarTitle: {
marginBottom: 10,
fontSize: 22,
lineHeight: 32,
color: '#ffffff',
fontWeight: 'bold',
},
});

export default function AppBar() {
return (
<View style={styles.appBar}>
<View style={styles.appBarInner}>
<Text style={styles.appBarTitle}>MemoApp</Text>
<Text style={styles.appBarRight}>ログアウト</Text>
</View>
</View>
)
}
