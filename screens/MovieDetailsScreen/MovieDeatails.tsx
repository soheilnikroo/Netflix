import * as React from 'react';
import { View, Text } from '../../components/Themed';
import { Image, Pressable } from 'react-native';
import styles from './styles';
import {MaterialIcons,Entypo, AntDesign,Feather, Ionicons} from '@expo/vector-icons'

import movie from '../../assets/data/movie';

const firstEpisode=movie.seasons.items[0].episodes.items[0];

const MovieDetails=()=>{

    return(
        <View>
            <Image
                source={{uri:firstEpisode.poster}}
                style={styles.image}
            />
            <View style={{padding:12}}>
                <Text style={styles.title}>
                    {movie.title}
                </Text>
                <View style={{flexDirection:'row',marginTop:5}}> 
                    <Text style={styles.match}>
                        98% match
                    </Text>
                    <Text style={styles.year}>
                        {movie.year}
                    </Text>
                    <View style={styles.agaeContainer}>
                        <Text style={styles.age}>
                            12+
                        </Text>
                    </View>
                    <Text style={styles.year}>
                        {movie.numberOfSeasons} Seasons
                    </Text>
                    <MaterialIcons name="hd" size={24} color='white' />
                </View>
                <Pressable onPress={()=>{console.warn("Plage")}} style={styles.playButton}>
                    <Text style={styles.playButtonText}>
                        <Entypo name="controller-play" size={18} color="black" />
                        {' '}
                        Play
                    </Text>
                </Pressable>
                <Pressable onPress={()=>{console.warn("Plage")}} style={styles.downloadButton}>
                    <Text style={styles.downloadButtonText}>
                        <AntDesign  name="download" size={18} color="white" />
                        {'  '}
                        Download
                    </Text>
                </Pressable>

                <Text style={{marginVertical:10}}>
                    {movie.plot}
                </Text>
                <Text style={[styles.year,{marginHorizontal:0}]}>
                    Cast: {movie.cast}
                </Text>
                <Text style={[styles.year,{marginHorizontal:0}]}>
                    Creator: {movie.creator}
                </Text>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <View style={{margin:20,marginHorizontal:50,alignItems: 'center'}}>
                        <AntDesign name="plus" size={30} color="white"/>
                        <Text style={{color:'darkgrey'}}>
                            My List
                        </Text>
                    </View>
                    <View style={{margin:20,marginHorizontal:50,alignItems: 'center'}}>
                        <Feather name="thumbs-up" size={30} color="white"/>
                        <Text style={{color:'darkgrey'}}>
                            Rate
                        </Text>
                    </View>
                    <View style={{margin:20,marginHorizontal:50,alignItems: 'center'}}>
                        <Ionicons name="share-social-sharp" size={30} color="white"/>
                        <Text style={{color:'darkgrey'}}>
                            Share
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default MovieDetails;