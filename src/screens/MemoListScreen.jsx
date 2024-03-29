import { StyleSheet, View } from 'react-native';

import AppBar from '../components/AppBar';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f0f4f0',
},

});

export default function MemoListScreen(){
return (
<View style={styles.container}>

<AppBar />

<MemoList />

<CircleButton name='plus' />

</View>
)
}
