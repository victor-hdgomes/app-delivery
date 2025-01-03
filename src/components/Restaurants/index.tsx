import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Restaurant } from "./types";
import { RestaurantItem } from "./components/RestaurantItem";

export function Restaurants() {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await fetch("http://192.168.15.8:3000/restaurants");
                const result = await response.json();
                setRestaurants(result);
            } catch (error) {
                console.error("Error fetching restaurants:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRestaurants();
    }, []);

    if (isLoading) {
        return;
    }

    return (
        <FlatList
            data={restaurants}
            horizontal
            keyExtractor={restaurant => restaurant.id}
            contentContainerStyle={{ gap: 14 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item: restaurant }) => (
                <RestaurantItem restaurant={restaurant} />
            )}
        />
    )
}