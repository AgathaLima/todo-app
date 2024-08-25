import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#333333',
        borderRadius: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 16,
        // borderWidth: 2, // Define a espessura da borda
        // borderColor: '#ff0000', // Define a cor da borda
    },
    task: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 65,
    },
    checkBox: {
        width: 24,
        height: 24,
        margin: 8
    },
    input: {
        height: 54,
        marginRight: 8,
        padding: 15,
        fontSize: 16,
        borderRadius: 5,
        color: '#fff'
    },
    buttonStyle: {
        height: 32,
        width: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTask: {
        color: '#fff',
        fontSize: 18,
        width: 200,
    },
});