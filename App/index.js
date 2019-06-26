import React from "react";
import Navigation from "./navigation";
import { View, Text } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Something Kitty</Text>
      </View>
    );
  }
}
