import React from "react";
import { View, Text, Button } from "react-native";

export default navigation => {
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Living Room"
      onPress={() => navigation.navigate("LivingRoom")}
    />
  </View>;
};
