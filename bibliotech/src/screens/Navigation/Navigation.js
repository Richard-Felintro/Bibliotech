import { Button, StyleSheet, View } from "react-native";

export const Navigation = ({ navigation }) => {
  return (
    <View>
      <View style={styles.buttonView}>
        <Button title="Main" onPress={() => navigation.navigate("Main")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    marginTop: 100,
  },
});
