import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },

  taskContainer: {
    flex: 1,
  },

  tasksCreated: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },

  tasksDone: {
    color: "#5E60CE",
    fontSize: 12,
    fontWeight: "bold",
  },

  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  counterContainer: {
    backgroundColor: "#3f3d4e",
    width: 25,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },

  counterText: {
    color: "#131016",
    fontWeight: "bold",
  },
});
