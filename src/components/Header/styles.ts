import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#131016",
  },

  textLogo: {
    padding: 16,
    flexDirection: "row",
    fontSize: 38,
    marginTop: 36,
    fontWeight: "bold",
  },

  leftText: {
    color: "#fff",
  },

  rightText: {
    color: "#5E60CE",
  },

  input: {
    flex: 1,
    marginRight: 12,
    backgroundColor: "#1f1e25",
    height: 56,
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
    fontSize: 14,
  },

  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 24,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#5E60CE",
    alignItems: "center",
    justifyContent: "center",
  },
});
