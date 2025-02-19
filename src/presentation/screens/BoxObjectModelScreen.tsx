import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function BoxObjectModelScreen() {
  return (
    <View style={ styles.container}>
        {/* <Text style={ styles.title }> BoxObjectModel</Text> */}
        <View style={ styles.purpleBox }> </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    title: {
        fontSize: 30,
        paddingHorizontal: 30,
        paddingVertical: 30,
        borderWidth: 10,
    },
    purpleBox: {
        height: 30,
        backgroundColor: 'purple',
        marginHorizontal: 28,
        marginVertical: 50,
    },
});
