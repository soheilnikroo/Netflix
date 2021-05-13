import * as React from 'react';
import { Image } from 'react-native';
import {Text,View} from '../Themed';
import {AntDesign} from '@expo/vector-icons';

import styles from './styles'

interface EpisodeItemProps{

    episode:{
        id:string,
        title:string,
        poster:string,
        duration:string,
        plot:string,
        video:string
    }
}

const EpisodeItem=(props:EpisodeItemProps) => {

    const {episode}=props;

    return(
        <View style={{margin:10}}>
            <View style={styles.row}>
                <Image
                    style={styles.image}
                    source={{uri:episode.poster}}
                />
                <View style={styles.titleContainer}>
                    <Text>
                        {episode.title}
                    </Text>
                    <Text style={styles.duration}>
                        {episode.duration}
                    </Text>
                </View>
                <AntDesign name="download" size={24} color="white" />
            </View>
            <Text style={styles.plot}>
                {episode.plot}
            </Text>
        </View>
    );
};

export default EpisodeItem;