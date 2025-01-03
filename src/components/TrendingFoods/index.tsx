import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { FoodItem } from "./components/FoodItem";
import { Food } from "./types";

export function TrendingFoods() {
    const [foods, setFoods] = useState<Food[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTrendingFoods = async () => {
            try {
                const response = await fetch("http://192.168.15.8:3000/foods");
                const result = await response.json();
                setFoods(result);
            } catch (error) {
                console.error("Error fetching trending foods:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTrendingFoods();
    }, []);

    if (isLoading) {
        return;
    }

    return (
        <FlatList
            data={foods}
            horizontal
            keyExtractor={food => food.id}
            contentContainerStyle={{ gap: 14 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item: food }) => (
                <FoodItem food={food} />
            )}
        />
    );
}
