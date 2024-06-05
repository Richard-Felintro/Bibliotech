import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "./src/screens/Navigation/Navigation";
import {
  useFonts,
MontserratAlternates_100Thin,
MontserratAlternates_200ExtraLight,
MontserratAlternates_100Thin_Italic,
MontserratAlternates_200ExtraLight_Italic,
MontserratAlternates_300Light,
MontserratAlternates_300Light_Italic,
MontserratAlternates_400Regular,
MontserratAlternates_400Regular_Italic,
MontserratAlternates_500Medium,
MontserratAlternates_500Medium_Italic,
MontserratAlternates_600SemiBold,
MontserratAlternates_600SemiBold_Italic,
MontserratAlternates_700Bold,
MontserratAlternates_700Bold_Italic,
MontserratAlternates_800ExtraBold,
MontserratAlternates_800ExtraBold_Italic,
MontserratAlternates_900Black,
MontserratAlternates_900Black_Italic,
} from "@expo-google-fonts/montserrat-alternates";
import { StatusBar } from "expo-status-bar";

//* Murilo Telas
import { Main } from "./src/screens/Main/Main";


//* Richard Telas
import { LoginScreen } from "./src/screens/LoginScreen/LoginScreen";
import { ForgotPasswordScreen } from "./src/screens/ForgotPasswordScreen/ForgotPasswordScreen";
import { ChangePasswordScreen } from "./src/screens/ChangePasswordScreen/ChangePasswordScreen";
import { CodeVerificationScreen } from "./src/screens/CodeVerificationScreen/CodeVerificationScreen";
import { BookInfoScreen } from "./src/screens/BookInfoScreen/BookInfoScreen";

//* Matheus Telas
import { Calendar } from "./src/screens/CalendarPage/CalendarPage";
import { Profile } from "./src/screens/Profile/Profile";
import { Calendario, CalendarioCompleto } from "./src/components/Callendar/Index";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_200ExtraLight,
    MontserratAlternates_300Light,
    MontserratAlternates_400Regular,
    MontserratAlternates_500Medium,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_700Bold,
  });

  if(!fontsLoaded && !fontError){
    return null;
  }
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <Stack.Navigator>
        <Stack.Screen
          name="Navegation"
          component={Navigation}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CodeVerification"
          component={CodeVerificationScreen}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePasswordScreen}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BookInfo"
          component={BookInfoScreen}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Calendar"
          component={Calendar}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
