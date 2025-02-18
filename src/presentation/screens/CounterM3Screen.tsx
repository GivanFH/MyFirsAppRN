import React, { useState } from 'react';
import { View } from 'react-native';
import { FAB, Text } from 'react-native-paper';
import { globalStyles } from '../theme/global.styles';

export const CounterM3Screen = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={ globalStyles.centerContainer }>
            <Text style={globalStyles.title}> {count} </Text>

            <FAB 
                onPress={ () => setCount( count + 1) }
                onLongPress={ () => setCount(0)}
                style={ globalStyles.fab }
                icon={'add-outline'}
            />
        </View>
    );
}
