import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from "../screens/Home";
import LivingRoom from "../screens/LivingRoom";

const MainStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: "Home"
    }
  },
  LivingRoom: {
    screen: LivingRoom,
    navigationOptions: {
      headerTitle: "Living Room"
    }
  }
});

export default createAppContainer(MainStack);
