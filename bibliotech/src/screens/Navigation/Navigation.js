import { Button, StyleSheet, View } from "react-native";

export const Navigation = ({ navigation }) => {
  return (
    <View>
      <View style={styles.buttonView}>
        <Button title="Main" onPress={() => navigation.navigate("Main")} />
        <Button title="login" onPress={() => navigation.navigate("Login")} />
        <Button title="forgot password" onPress={() => navigation.navigate("ForgotPassword")} />
        <Button title="code verify" onPress={() => navigation.navigate("CodeVerification")} />
        <Button title="change password" onPress={() => navigation.navigate("ChangePassword")} />
        <Button title="book info" onPress={() => navigation.navigate("BookInfo")} />
        <Button title="Profile" onPress={() => navigation.navigate("Profile")}/>
        <Button title="Calendar" onPress={() => navigation.navigate("Calendar")}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    marginTop: 100,
  },
});
