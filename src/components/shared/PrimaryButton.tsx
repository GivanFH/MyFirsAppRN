/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line quotes
import { Pressable, StyleSheet, Text } from "react-native";

type PrimaryButtonProps = {
    label: string;
    onPress?: () => void;
    onLongPress?: () => void;
}


export const PrimaryButton = ({ label, onPress, onLongPress }: PrimaryButtonProps) => {
    return (
        <Pressable
            onPress={() => onPress && onPress()}
            onLongPress={() => onLongPress && onLongPress()}
            style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
            ]}
        >
            <Text style={{ color: 'white' }}>{label}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#5856D6',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        color: 'white',
    },
    buttonPressed: {
        backgroundColor: '#4746AB',
    },
});
