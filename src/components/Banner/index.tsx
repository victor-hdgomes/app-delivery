import { View } from "react-native";
import PagerView from 'react-native-pager-view';
import { BannerImage } from "./components/BannerImage";
import { banners } from "./constants";

export function Banner() {
    return (
        <View className="w-full h-40 md:h-60 rounded-2xl my-5">
            <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
                {banners.map((banner, index) => (
                    <BannerImage bannerName={banner.bannerName} key={index} onPress={banner.onPress} />
                ))}
            </PagerView>
        </View>
    );
}