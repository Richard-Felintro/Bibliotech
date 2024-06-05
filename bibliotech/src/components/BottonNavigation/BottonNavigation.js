import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ContentIcon } from "./Style";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Main } from "../../screens/Main/Main";
import { Profile } from "../../screens/Profile/Profile";

const BottomTab = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Main"
      screenOptions={() => ({
        tabBarStyle: {
          backgroundColor: "#012141",
          height: 64,
          paddingTop: 10,
        },
        tabBarActiveBackgroundColor: "transparent",
        tabBarShowLabel: false,
        headerShown: false,

        tapBarIcon: ({ focused }) => {
          return (
            <>
              <ContentIcon
                tabBarActiveBackgroundColor={
                  focused ? "#ffffff" : "transparent"
                }
              >
                <SimpleLineIcons name="home" size={29} color="#ffffff" />
              </ContentIcon>
              <ContentIcon
                tabBarActiveBackgroundColor={
                  focused ? "#ffffff" : "transparent"
                }
              >
                <Ionicons name="person" size={24} color="#ffffff" />
              </ContentIcon>
            </>
          );
        },
      })}
    >
      <BottomTab.Screen name="Main" component={Main} />
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
  );
};
