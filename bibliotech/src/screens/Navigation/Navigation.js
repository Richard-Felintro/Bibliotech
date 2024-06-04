import { Button, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Calendar } from "react-native-calendars";

const Stack = createNativeStackNavigator();
export const Navigation = ({navigation}) => {
    return(
       <View style={{
      marginTop:50

    }}>
         <Button 
                title="Profile" 
                onPress={()=> navigation.navigate("Profile")}         
         />
         <Button 
                title="Calendar" 
                onPress={()=> navigation.navigate("Calendar")}         
         />
       </View>
    );
}