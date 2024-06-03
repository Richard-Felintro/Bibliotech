import { Button, View } from "react-native";

export const Navigation = ({ navigation }) => {
  return (
    <View>
      <Button title="" onPress={() => navigation.navigate("Login")} />
      <Button title="login" onPress={() => navigation.navigate("Login")} />
      <Button title="forgot password" onPress={() => navigation.navigate("ForgotPassword")} />
      <Button title="code verify" onPress={() => navigation.navigate("CodeVerification")} />
      <Button title="change password" onPress={() => navigation.navigate("ChangePassword")} />
      <Button title="book info" onPress={() => navigation.navigate("BookInfo")} />
    </View>
  );
};
