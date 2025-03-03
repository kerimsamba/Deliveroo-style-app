import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
    // Define categories array with unique ids
    const categories = [
        { id: 1, title: "Testing1", imgUrl: "https://links.papareact.com/gn7" },
        { id: 2, title: "Testing2", imgUrl: "https://links.papareact.com/gn7" },
        { id: 3, title: "Testing3", imgUrl: "https://links.papareact.com/gn7" },
        { id: 4, title: "Testing4", imgUrl: "https://links.papareact.com/gn7" },
        { id: 5, title: "Testing5", imgUrl: "https://links.papareact.com/gn7" },
        { id: 6, title: "Testing6", imgUrl: "https://links.papareact.com/gn7" },
    ];

    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {/* Map through categories array */}
            {categories.map((category) => (
                <CategoryCard 
                    key={category.id}
                    imgUrl={category.imgUrl} 
                    title={category.title} 
                />
            ))}
        </ScrollView>
    )
}

export default Categories