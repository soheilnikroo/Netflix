import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

        image: {
            width:'100%',
            resizeMode:'cover',
            aspectRatio:16/9
        },

        title: {
            fontSize:20,
            fontWeight:'bold',
        },

        match:{
            color:'#59d467',
            fontWeight:'bold',
            marginRight:10

        },

        year:{
            color:'#757575',
            marginHorizontal:10
        },

        agaeContainer:{
            backgroundColor:'#e6e229',
            borderRadius:5,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal:3,
            marginHorizontal:10
        },

        age:{
            color:'black',
            fontWeight:'bold',
        },


        playButton:{
            backgroundColor:'white',
            justifyContent: 'center',
            alignItems: 'center',
            padding:5,
            borderRadius:5,
            marginBottom:10,
            marginTop:10
        },

        playButtonText:{
            color:'black',
            fontSize:16,
            fontWeight:'bold',
        },

        downloadButton:{
            backgroundColor:'#2b2b2b',
            justifyContent: 'center',
            alignItems: 'center',
            padding:5,
            borderRadius:5,
            marginBottom:10
        },

        downloadButtonText:{
            color:'white',
            fontSize:16,
            fontWeight:'bold',
        }

});

export default styles;