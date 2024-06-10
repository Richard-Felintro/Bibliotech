import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ContentIcon } from "./Style";

import { Main } from "../../screens/Main/Main";
import { Profile } from "../../screens/Profile/Profile";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Main"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#012141",
          height: 64,
          paddingTop: 10,
        },
        tabBarActiveBackgroundColor: "transparent",
        tabBarShowLabel: false,
        headerShown: false,

        tabBarIcon: ({ focused }) => {
          if (route.name === "Main") {
            return (
              <ContentIcon>
                <MaterialCommunityIcons
                  name="home-variant"
                  size={28}
                  color={focused ? "#468faf" : "#ffffff"}
                />
              </ContentIcon>
            );
          } else {
            return (
              <ContentIcon>
                <Ionicons
                  name="person"
                  size={28}
                  color={focused ? "#468faf" : "#ffffff"}
                />
              </ContentIcon>
            );
          }
        },
      })}
    >
      <BottomTab.Screen name="Main" component={Main} />
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
  );
};
