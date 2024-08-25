import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 50
    },
    inputStyle: {
        flex: 1,
        backgroundColor: '#262626',
        height: 54,
        marginRight: 8,
        padding: 15,
        fontSize: 16,
        borderRadius: 5,
        color: '#fff'
    },
    buttonStyle: {
        backgroundColor: '#1E6F9F',
        height: 54,
        width: 54,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        color: '#fff',
        fontSize: 18
    }
})