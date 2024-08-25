import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";


export function InputTask({setTasks, onCreate, tasks}: any){

    return(
        <View style={styles.container}>
            <TextInput 
                value={tasks} 
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor="#808080"
                style={styles.inputStyle}
                onChangeText={setTasks}
            />
             <TouchableOpacity
                style={styles.buttonStyle}
                onPress={onCreate}
             >
                <Text style={styles.btn}>+</Text>
            </TouchableOpacity>
        </View>
    )
}