import { StyleSheet, Text, View } from 'react-native'

export const HelloWorldScreen = () => {
    return (
        <View style={ style.container }>
            <Text style={ style.title }>Hello World</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        color: 'black',
        padding: 20,
    },
});
