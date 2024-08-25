import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export function Tasks({ name, onRemove, handleCheck }: any) {

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={handleCheck}
                    style={styles.task}
                >
                    {name?.status ?
                        <Image
                            style={styles.checkBox}
                            source={require('../../assets/image/checked.png')}
                        /> :
                        <Image
                            style={styles.checkBox}
                            source={require('../../assets/image/check.png')}
                        />
                    }
                    <Text
                        style={styles.textTask}>
                        {name?.name}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={onRemove}
                >
                    <Image
                        source={require('../../assets/image/trash.png')}
                    />
                </TouchableOpacity>
            </View>
        </>
    )
}