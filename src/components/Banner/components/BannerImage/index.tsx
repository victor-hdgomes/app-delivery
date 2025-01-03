import { Image, Pressable } from "react-native";
import { BannerImageProps } from "./types";
import { bannerMapper } from "./mappers";

export function BannerImage({ key, onPress, bannerName }: BannerImageProps) {
    const banner = bannerMapper[bannerName];

    if (!banner) {
        return;
    }

    return (
        <Pressable
            className="w-full h-40 md:h-60 rounded-2xl"
            key={key}
            onPress={onPress}
        >
            <Image
                source={banner}
                className="w-full h-40 md:h-60 rounded-2xl"
            />
        </Pressable>
    );
}