import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image:{
        width:150,
        height:200,
        resizeMode:'cover',
        borderRadius: 8,
        marginLeft:20,
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        marginBottom:15
    },
    container: {
        flex: 1,
        marginLeft:5

    }
});

export default styles;