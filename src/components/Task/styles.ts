import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskContainer: {
    width: "100%",
    height: 64,
    backgroundColor: "#1f1e25",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 4,
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderRadius: 5,
  },

  textContainer: {
    width: "70%",
    height: 40,
    alignContent: "center",
    justifyContent: "center",
    marginHorizontal: 16,
  },

  textDone: {
    color: "#a6a6a6a6",
    textDecorationLine:'line-through',
  },

  textCreated: {
    color: "#fff",
    textDecorationLine:'none',


  },

  column: {
    flex: 1, // Faz cada coluna ocupar a mesma quantidade de espaço
    justifyContent: "center", // Alinha o conteúdo verticalmente
    alignItems: "center", // Alinha o conteúdo horizontalmente
    borderColor: "gray", // Apenas para visualização, pode remover isso
    padding: 10, // Espaçamento interno para o conteúdo das colunas
  },
  description: {
    color: "#fff",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },

  button: {
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "black",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
  },
  checkedLabel: {
    textDecorationLine: "line-through", // Adiciona linha de texto riscado quando marcado
  },
});
