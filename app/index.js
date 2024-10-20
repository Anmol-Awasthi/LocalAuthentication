import { Button, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import * as LocalAuthentication from "expo-local-authentication";
import { styled } from "nativewind";
import { StatusBar } from "expo-status-bar";

const Index = () => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(false);
    (async () => {
      const biometricSupported = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(biometricSupported);
    })();
  }, []);

  function onAuthenticate() {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate to continue",
      fallbackLabel: "Enter Password",
    });
    auth.then(result => {
      setAuthenticated(result.success);
    });
  }

  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-[#1a1a1a] p-5">
      <StatusBar style="light" />
      <Text className="text-white text-2xl font-bold mb-5 text-center">
        Local Authentication Demo
      </Text>
      <Text className="text-gray-500 text-base mb-10 text-center">
        Biometric Supported: {isBiometricSupported ? "Yes" : "No"}
      </Text>

      {isAuthenticated ? (
        <TouchableOpacity
          className="bg-[#333] rounded-lg py-4 px-8 mb-3 shadow-lg shadow-[#00FFAA] elevation-10"
          onPress={() => router.push("/protected/Canvas")}
        >
          <Text className="text-[#00FFAA] text-lg font-semibold text-center">
            Access the content
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          className="bg-[#333] rounded-lg py-4 px-8 mb-3 shadow-lg shadow-[#00FFAA] elevation-10"
          onPress={onAuthenticate}
        >
          <Text className="text-[#00FFAA] text-lg font-semibold text-center">
            Authenticate
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Index;
