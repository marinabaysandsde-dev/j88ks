import { Image, StyleSheet, View } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "/loading.png" }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  image: {
    width: 300,
    height: 300,
  },
});
