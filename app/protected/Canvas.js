import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { styled } from "nativewind";
import { StatusBar } from "expo-status-bar";

const PrivateContent = () => {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-[#1a1a1a] p-5">
      <StatusBar style="light" />
      <Text className="text-white text-2xl font-bold mb-5 text-center">
        Private Content
      </Text>
      <Text className="text-gray-500 text-base mb-10 text-center">
        You have successfully authenticated and gained access to this exclusive content.
      </Text>

      {/* Placeholder for 3D content */}
      <View className="bg-[#333] w-80 h-80 rounded-lg mb-10 shadow-lg shadow-[#00FFAA] elevation-10 flex justify-center items-center">
        <Text className="text-[#00FFAA] text-3xl font-semibold text-center">
        Coming Soon
        </Text>
      </View>

      <TouchableOpacity
        className="bg-[#333] rounded-lg py-4 px-8 shadow-lg shadow-[#00FFAA] elevation-10"
        onPress={() => router.push("/")}
      >
        <Text className="text-[#00FFAA] text-lg font-semibold text-center">
          Go Back Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrivateContent;
