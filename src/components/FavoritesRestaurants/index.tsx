import { useEffect, useState } from "react";
import { View } from "react-native";
import { Restaurant } from "../Restaurants/types";
import { FavoriteRestaurant } from "./components/FavoriteRestaurant";

export function FavoritesRestaurants() {
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
        <View className="w-full mb-11 gap-4">
            {restaurants.map(restaurant => (
                <FavoriteRestaurant restaurant={restaurant} key={restaurant.id} />
            ))}
        </View>
    )
}