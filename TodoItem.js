import React from 'react';
import { Text,StyleSheet,TouchableOpacity } from 'react-native';

export default function App({item,pressHandler}) {

return (
    <TouchableOpacity onPress={()=>pressHandler(item.key)} >
        <Text style={styles.item}>
            {item.text}
        </Text>

    </TouchableOpacity>
)
}

const styles = StyleSheet.create({
    item:{
        padding:16,
        margin:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    }
})