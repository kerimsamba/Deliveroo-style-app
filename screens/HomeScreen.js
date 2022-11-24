import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5 mt-12">

        {/* header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-1">
          <Image
            source={{
              uri: 'https://links.papareact.com/wru'
            }}
            className='h-7 w-7 bg-gray-300 p-4 rounded-full'
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <AntDesign name="down" size={20} color="#00CCBB" />
            </Text>
          </View>
          <FontAwesome name="user-o" size={35} color="#00CCBB" />
        </View>
        {/* search */}
        <View className="flex-row items-center  pb-2 mx-4 px-4">
          <View className="flex-row w-full space-x-1 bg-gray-200 p-3">
            <Feather name="search" size={20} color="grey" />
            <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />

          </View>
          <Feather name="sliders" size={24} color="#00CCBB" />
        </View>
        {/* body */}
        <ScrollView className="bg-gray-100">
          {/* Categories */}
          <Categories/>
          {/* Featured rows */}
          <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our partners"
          /><FeaturedRow
          id="1234"
          title="Tasty Discounts"
          description="Everyone has been enjoying these juicy discounts!"
          /><FeaturedRow
          id="12345"
          title="Offers near you"
          description="Why not support your local restaurant tonight!"
          />
        </ScrollView>
    </SafeAreaView>
  );
};
// className="flex w-full items-end gap-4"
export default HomeScreen;