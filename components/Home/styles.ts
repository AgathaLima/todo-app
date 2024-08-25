import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1
        // borderWidth: 2, // Define a espessura da borda
        // borderColor: '#ff0000', // Define a cor da borda
    },
    containerImage:{
        alignItems: 'center',
        paddingTop: 50,
        height: 173,
    },
    containerList: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        paddingHorizontal: 16
    },
    statusView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    textStatusView1: {
        fontSize: 16,
        color: '#4EA8DE',
        fontWeight: 'bold'  
    },
    textStatusView2: {
        fontSize: 16,
        color: '#8284FA',
        fontWeight: 'bold'  
    }
})