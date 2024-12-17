import { Text, View, Image, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
      }}
    >
      <Image
        source={require("../../assets/images/react-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 120,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 20,
  },
  text: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
});
