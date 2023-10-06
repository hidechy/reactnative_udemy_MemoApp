import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f0f4f0',
},
memoHeader: {
backgroundColor: '#407fd3',
height: 96,
justifyContent: 'center',
paddingVertical: 24,
paddingHorizontal: 20,
},
memoTitle: {
color: '#ffffff',
fontSize: 20,
lineHeight: 32,
fontWeight: 'bold'
},
memoDate: {
color: '#ffffff',
fontSize: 12,
lineHeight: 16,
},
memoBody: {
paddingVertical: 32,
paddingHorizontal: 30,
},
memoText: {
fontSize: 16,
lineHeight: 24,
},
});

export default function MemoDetailScreen() {
    return (
        <View style={styles.container}>
            <AppBar />

            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2023.10.06</Text>
            </View>

            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoText}>
                    買い物リスト
                    書体やレイアウトなどを確認するために用います。
                    本文用なので使い方を間違えると不自然に見えることもありますので要注意。
                </Text>
            </ScrollView>

            <CircleButton style={{top:160, bottom: 'auto'}} name='edit-2' />

        </View>
    )
}
