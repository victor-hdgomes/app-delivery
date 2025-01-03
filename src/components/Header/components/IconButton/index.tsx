import React from "react";
import { Pressable } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { IconButtonProps } from "./types";

const iconMapper: Record<string, any> = {
    ionicons: Ionicons,
    feather: Feather,
};

export function IconButton({ iconName, iconLibrary }: IconButtonProps) {
    const IconComponent = iconMapper[iconLibrary.toLowerCase()];

    if (!IconComponent) {
        return <></>;
    }

    return (
        <Pressable className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <IconComponent name={iconName} size={20} color="#121212" className="text-center" />
        </Pressable>
    );
}
