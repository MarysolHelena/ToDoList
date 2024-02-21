import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";

type HeaderProps = {
  task: string;
  onChangeText: (task: string) => void;
  onPress: () => void;
};

import { Task } from "../Task";

export function Header({ task, onChangeText, onPress }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.textLogo}>
        <Text style={styles.leftText}>To</Text>
        <Text style={styles.rightText}>Do</Text>
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={"#6b6b6b"}
          value={task}
          onChangeText={onChangeText}
        />

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Entypo name="add-to-list" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
