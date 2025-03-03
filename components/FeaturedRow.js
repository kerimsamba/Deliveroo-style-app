import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ id, title, description }) => {
    // Define restaurants array with unique ids
    const restaurants = [
        {
            id: 1,
            imgUrl: "https://links.papareact.com/gn7",
            title: "Yo Sushi",
            rating: 4.5,
            genre: "Japanese",
            address: "123 Main Street",
            short_description: "This is a test description",
            dishes: [],
            long: 20,
            lat: 0
        },
        {
            id: 2,
            imgUrl: "https://links.papareact.com/gn7",
            title: "Yo Sushi",
            rating: 4.5,
            genre: "Japanese",
            address: "123 Main Street",
            short_description: "This is a test description",
            dishes: [],
            long: 20,
            lat: 0
        },
        {
            id: 3,
            imgUrl: "https://links.papareact.com/gn7",
            title: "Yo Sushi",
            rating: 4.5,
            genre: "Japanese",
            address: "123 Main Street",
            short_description: "This is a test description",
            dishes: [],
            long: 20,
            lat: 0
        }
    ];

    return (
        <View>
            <View className='mt-4 flex-row items-center justify-between px-4'>
                <Text className="font-bold text-lg">{title}</Text>
                <AntDesign name="arrowright" size={24} color="#00CCBB" />
            </View>
            <Text className="text-xs test-gray-500 px-4">{description}</Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >
                {/* Map through restaurants array */}
                {restaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.id}
                        id={restaurant.id}
                        imgUrl={restaurant.imgUrl}
                        title={restaurant.title}
                        rating={restaurant.rating}
                        genre={restaurant.genre}
                        address={restaurant.address}
                        short_description={restaurant.short_description}
                        dishes={restaurant.dishes}
                        long={restaurant.long}
                        lat={restaurant.lat}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default FeaturedRow