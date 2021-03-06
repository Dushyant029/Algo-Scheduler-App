import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet ,Image, Dimensions} from 'react-native';

import {icons} from '../assets/icons'
import Colors from '../constants/Colors';

const WIDTH = Dimensions.get('window').width

const AlgorithmsList = props => {
   
    return(
        <TouchableOpacity onPress={props.onPress} style={styles.container} activeOpacity={1}>
            <View style={styles.gridItem} >
                <Image 
                    style={styles.icon}
                    resizeMode="contain"
                    source = {icons[props.shortName]}
                />
                <Text style={styles.title}>{props.name}</Text>
                <View style={styles.bgBubble}></View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        margin:10,
    
    },
    gridItem : {
        flex: 1,
        backgroundColor : Colors.primaryColor,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 25,
    },
    title : {
        fontSize : 14,
        textAlign:'center',
        padding:10,
        position:'absolute',
        bottom:10,
        zIndex:3,
        color : '#fff',
    },
    icon : {
        width:100,
        height:100,
        zIndex:2,
        top:20,
    },
    bgBubble:{
        width:'100%',
        height:65,
        borderTopRightRadius:200,
        borderTopLeftRadius:200,
        zIndex:0,
        bottom:0,
        borderBottomRightRadius:25,
        borderBottomLeftRadius:25,
        backgroundColor: Colors.lightGreen,
    }

});

export default AlgorithmsList;