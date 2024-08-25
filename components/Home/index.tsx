import { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

import { styles } from "./styles";
import { InputTask } from "../InputTask";
import { Tasks } from "../Tasks";

export function Home() {

    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState<any[]>([]);

    function handleCreate(taskAdded: string){
        setTasks((prev: any) => [...prev, {name: taskAdded, status: false}]);
        setNewTask('');
    }

    function handleRemove(taskAdded: string){
        setTasks(tasks.filter((task) => task !== taskAdded));
    }

    function handleCheck(taskAdded: any) {
        const updatedTasks = tasks.map((task) =>
            task.name === taskAdded?.name ? { ...task, status: !taskAdded.status } : task
          );
          setTasks(updatedTasks);
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image
                    source={require('../../assets/image/logo.png')}
                />
            </View>
            <View style={styles.containerList}>
                <InputTask 
                tasks={newTask}
                setTasks={setNewTask} 
                onCreate={()=> handleCreate(newTask)} />
                <View>
                    <View style={styles.statusView}>
                        <Text style={styles.textStatusView1}>Criadas  <Text>()</Text> </Text>
                        <Text style={styles.textStatusView2}>Concluídas  <Text>()</Text> </Text>
                    </View>
                </View>
                <FlatList
                    data={tasks}
                    keyExtractor={(item: any) => item?.name}
                    renderItem={({ item }) => (
                        <Tasks name={item} handleCheck={() => handleCheck(item)} onRemove={()=> handleRemove(item)} />
                    )}
                />
            </View>
        </View>
    )
}