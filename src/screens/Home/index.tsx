import { Text, View, FlatList, Alert } from "react-native";
import { styles } from "./styles";

import { Task } from "../../components/Task";
import { Header } from "../../components/Header";
import { TaskDTO } from "../../dtos/TaskDTO";
import { useState } from "react";
import { Empty } from "../../components/Empty";
import { uuid } from "../../utils/uuid";

export function Home() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleTaskAdd() {
    if (newTask !== "" && newTask.length >= 5) {
      setTasks((tasks) => [
        ...tasks,
        { id: uuid(), isCompleted: false, title: newTask.trim() },
      ]);

      setNewTask("");
    }
  }

  function handleTaskDone(id: string) {
    setTasks((task) =>
      task.map((task) => {
        task.id === id ? (task.isCompleted = !task.isCompleted) : null;
        return task;
      })
    );
  }

  function handleTaskDelete(id: string) {
    // Encontra a tarefa com o ID correspondente
    const taskToDelete = tasks.find((task) => task.id === id);

    if (taskToDelete) {
      // Recupera o título da tarefa
      const title = taskToDelete.title;

      // Exibe o alerta de confirmação com o título da tarefa
      Alert.alert("Deletar", `Apagar a tarefa "${title}"?`, [
        {
          text: "Sim",
          onPress: () =>
            setTasks((tasks) => tasks.filter((task) => task.id !== id)),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]);
    }
  }

  function countCompletedTasks() {
    const completedTasks = tasks.filter((task) => task.isCompleted);
    return completedTasks.length;
  }

  function countCreatedTasks() {
    return tasks.length;
  }

  return (
    <View style={styles.container}>
     




      <Header
        task={newTask}
        onChangeText={setNewTask}
        onPress={handleTaskAdd}
      />


      <View style={styles.taskContainer}>
        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={styles.tasksCreated}>Criadas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>{countCreatedTasks()}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.tasksDone}>Concluidas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>{countCompletedTasks()}</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(tasks) => tasks.id}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              onTaskDone={() => handleTaskDone(item.id)}
              onTaskDelete={() => handleTaskDelete(item.id)}
              {...item}
              title={item.title}
            />
          )}
          ListEmptyComponent={Empty}
        />
      </View>
    </View>
  );
}
