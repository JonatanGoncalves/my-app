import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, Divider, MD3Colors, useTheme } from "react-native-paper";
export default function Home() {
    const { colors } = useTheme();
    return (
        <View style={{
            gap: 7,
            backgroundColor: colors.background
        }}>
            <Text style={{ color: colors.primary }}>React Native Paper</Text>
            <Text style={{ color: colors.accent }}>Prof Ingrid Mendonça</Text>
            <Button icon="camera" mode="contained" onPress={() => { }}>
                tirar foto
            </Button>
            <Divider color={MD3Colors.error50}/>
        </View>
    );
}