import React, { useState } from 'react'
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { globalStyles } from '../theme/global.styles';

export const CounterM3Screen = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={ globalStyles.centerContainer }>
            <Text style={globalStyles.title}> {count} </Text>

            


        </View>
    );
}
