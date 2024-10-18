import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 20
    },
    outerView: {
        height: 20,
        backgroundColor: 'rgba(20,95,174,0.49)',
        borderRadius: 20,
        overflow: 'hidden',
    },
    innerView: {
        height: 20,
        borderRadius: 20,
        width: '100%',
        backgroundColor: 'rgba(197,16,31,0.5)'
    },
    progress: {
        fontSize: 20,
        fontWeight: '800',
        textAlign: 'center',
        marginBottom: 25,
        color: 'blue'
    },
    step: {
        width: 30,
        height: 30,
        backgroundColor: 'rgba(19,67,223,0.5)',
        marginEnd: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    stepIndex: {
        fontSize: 15,
        color: 'white',
        fontWeight: '700'
    }
});

export default styles;
