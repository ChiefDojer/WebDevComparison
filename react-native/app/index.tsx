import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
    return (
        <View>
            <Text>React Native App</Text>
            <Link href="/world-clock">World Clock</Link>
            <Link href="/timer">Timer</Link>
            <Link href="/countdown">Countdown</Link>
        </View>
    );
}
