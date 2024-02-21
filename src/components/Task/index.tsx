import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { TaskDTO } from "../../dtos/TaskDTO";

type TasksProps = TaskDTO & {
  onTaskDone: (id: string) => void;
  onTaskDelete: (id: string) => void;
};

export function Task({
  id,
  title,
  isCompleted,
  onTaskDone,
  onTaskDelete,
}: TasksProps) {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={()=>onTaskDone(id)}>
        <MaterialIcons
          name={isCompleted ? "check-circle" : "radio-button-unchecked"}
          size={24}
          color={isCompleted ? "#5E60CE" : "#fff"}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={isCompleted ? styles.textDone : styles.textCreated}
        >
          {title}
        </Text>
      </View>

      <View>
        <TouchableOpacity onPress={()=> onTaskDelete(id)} style={styles.button}>
          <MaterialCommunityIcons
            name="delete-outline"
            size={20}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
