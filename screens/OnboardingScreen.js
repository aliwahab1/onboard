import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

function OnboardingScreen({ navigation }) {
  const Done = ({ ...props }) => (
    <TouchableOpacity {...props}>
      <Text style={{ fontSize: 16, marginHorizontal: 20 }}>Done</Text>
    </TouchableOpacity>
  );
  const Dots = ({ selected }) => {
    let backgroundColor;
    backgroundColor = selected ? "blue" : "black";
    return (
      <View
        style={{
          width: 24,
          height: 6,
          marginHorizontal: 3,
          backgroundColor,
        }}
      />
    );
  };
  return (
    <Onboarding
      onSkip={() => navigation.replace("Home")}
      onDone={() => navigation.replace("Home")}
      DoneButtonComponent={Done}
      pages={[
        {
          backgroundColor: "#000080",
          image: <Image source={require("../assets/onboarding1.png")} />,
          title: "",
          subtitle: "",
        },
        {
          backgroundColor: "#000080",
          image: <Image source={require("../assets/onboarding2.png")} />,
          title: "",
          subtitle: "",
        },
      ]}
    />
  );
}

export default OnboardingScreen;
