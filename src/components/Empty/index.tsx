import { View, Image, Text } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export function Empty() {
  return (
    <View style={styles.emptyContainer}>
      <MaterialIcons name="task" size={64} color="#3f3d4e" />
      <Text style={styles.textBold} >Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.textRegular}>Crie tarefas e organize seus itens a fazeres</Text>
    </View>
  );
}
