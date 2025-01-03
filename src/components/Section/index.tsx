import { Pressable, Text, View } from "react-native";
import { SectionProps } from "./types";

export function Section({ name, size = "text-2xl", label = "See more", action }: SectionProps) {
    return (
        <View className="w-full flex flex-row items-center justify-between">
            <Text className={`${size} font-semibold my-4 self-start`}>{name}</Text>

            <Pressable onPress={action}>
                <Text>{label}</Text>
            </Pressable>
        </View>
    )
}