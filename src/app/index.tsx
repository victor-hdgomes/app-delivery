import React from "react";
import { ScrollView, View } from "react-native";
import Constants from 'expo-constants';
import {
  Banner,
  FavoritesRestaurants,
  Header,
  Restaurants,
  Search,
  Section,
  TrendingFoods
} from "../components";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight }}>
        <Header />

        <Banner />

        <Search />

        <>
          <Section
            name="Trending foods"
            action={() => { }}
          />
          <TrendingFoods />
        </>

        <>
          <Section
            name="Restaurants"
            action={() => { }}
          />
          <Restaurants />
        </>

        <>
          <Section
            name="Favorites"
            action={() => { }}
          />
          <FavoritesRestaurants />
        </>
      </View>
    </ScrollView>
  );
}
