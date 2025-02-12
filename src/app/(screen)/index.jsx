import { Link, useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SignOut } from "../../hooks/Auth";
import { useDispatch } from "react-redux";

export default function Page() {
  return (
    <View className="flex flex-1 dark:bg-black bg-white">
      <Header />
      <Content />
    </View>
  );
}

function Content() {
  const dispatch = useDispatch()
  const router = useRouter()

  const out = () => {
    SignOut(dispatch)
    router.replace("/(auth)/login")
  }

  return (
    <View className="flex-1">
      <View className="py-12 md:py-24 lg:py-32 xl:py-48">
        <View className="px-4 md:px-6">
          <View className="flex flex-col items-center gap-4 text-center">
            <Text
              role="heading"
              className="text-3xl dark:text-white text-center native:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Welcome
            </Text>
            <Text className="mx-auto max-w-[700px] text-lg text-center text-gray-500 md:text-xl dark:text-gray-400">
              Discover and explore react native
            </Text>

            <TouchableOpacity onPress={() => out()} className="flex h-9 items-center justify-center overflow-hidden rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 web:shadow ios:shadow transition-colors hover:bg-gray-900/90 active:bg-gray-400/90 web:focus-visible:outline-none web:focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
              <Text className="text-white">Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

function Header() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }}>
      <View className="px-4 lg:px-6 h-14 flex items-center flex-row justify-between ">
        <Link className="font-bold flex-1 dark:text-white items-center justify-center" href="/">
          ACME
        </Link>
        <View className="flex flex-row gap-4 sm:gap-6">
          <Link
            className="text-md dark:text-white font-medium hover:underline web:underline-offset-4"
            href="/"
          >
            About
          </Link>
          <Link
            className="text-md dark:text-white font-medium hover:underline web:underline-offset-4"
            href="/"
          >
            Product
          </Link>
          <Link
            className="text-md dark:text-white font-medium hover:underline web:underline-offset-4"
            href="/"
          >
            Pricing
          </Link>
        </View>
      </View>
    </View>
  );
}
