import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { IconButton } from "./components/IconButton";

export function Header() {
    return (
        <View className="w-full flex flex-row items-center justify-between">
            <IconButton iconName="menu" iconLibrary="Ionicons" />

            <View className="flex flex-col items-center justify-center">
                <Text className="text-center text-sm text-slate-800">Location</Text>

                <View className="flex-row items-center justify-center gap-1">
                    <Feather name="map-pin" size={14} color="#FF0000" className="text-center" />
                    <Text className="text-lg font-bold">Campo grande</Text>
                </View>
            </View>

            <IconButton iconName="bell" iconLibrary="Feather" />
        </View>
    );
}
