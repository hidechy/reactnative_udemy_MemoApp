import React from 'react'

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

const styles = StyleSheet.create({

memoListItem: {
backgroundColor: '#ffffff',
flexDirection: 'row',
justifyContent: 'space-between',
paddingVertical: 16,
paddingHorizontal: 20,
alignItems: 'center',
marginBottom: 10,
borderWidth: 1,
borderColor: 'rgba(0, 0, 0, 0.15)'
},
memoListItemTitle: {
fontSize: 16,
lineHeight: 32,
},
memoListItemDate: {
fontSize: 12,
lineHeight: 16,
color: '#848484',
},

});

export default function MemoList() {
return (
<View>

<View style={styles.memoListItem}>
<View>
<Text style={styles.memoListItemTitle}>買い物リスト</Text>
<Text style={styles.memoListItemDate}>2023.10.06</Text>
</View>
<View>

<TouchableOpacity>
<Feather name='x' size={16} color='#b0b0b0' />
</TouchableOpacity>

</View>
</View>

<View style={styles.memoListItem}>
<View>
<Text style={styles.memoListItemTitle}>買い物リスト</Text>
<Text style={styles.memoListItemDate}>2023.10.06</Text>
</View>
<View>

<TouchableOpacity>
<Feather name='x' size={16} color='#b0b0b0' />
</TouchableOpacity>

</View>
</View>

<View style={styles.memoListItem}>
<View>
<Text style={styles.memoListItemTitle}>買い物リスト</Text>
<Text style={styles.memoListItemDate}>2023.10.06</Text>
</View>
<View>

<TouchableOpacity>
<Feather name='x' size={16} color='#b0b0b0' />
</TouchableOpacity>

</View>
</View>

</View>
)
}
