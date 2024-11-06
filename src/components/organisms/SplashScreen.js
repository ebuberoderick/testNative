import { View, Text, Image } from 'react-native'
import { UIActivityIndicator } from 'react-native-indicators';
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const SplashScreen = () => {
    return (
        <View className="flex-1 bg-black dark:bg-black h-screen w-screen items-center justify-center">
            <View className="absolute z-10 bg-white top-0 right-0 w-screen h-screen backdrop-blur-2xl opacity-15"></View>
            <Image source={require("../../assets/images/bond_logo-BdDnSNlI.png")} className="w-1/3 h-24" />
            <View className="absolute bottom-9">
                <UIActivityIndicator size={35} color='#fff' />
            </View>
        </View>
    )
}

export default SplashScreen