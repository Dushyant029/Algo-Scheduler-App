import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { ALGORITHMS } from '../data/algorithms-data';
import AlgorithmsList from '../components/AlgorithmsList';

import Colors from '../constants/Colors';

const AlgorithmsScreen = props => {

    const renderAlgorithms = itemData => {
        return (
            <AlgorithmsList
                onPress = {() => props.navigation.navigate({ routeName: 'Simulator' , params : {algorithmId : itemData.item.id}})}
                name={itemData.item.name}
                shortName={itemData.item.shortName}
            />
        );
    }

    return (
        <View style={styles.greenBg}>
           <View style={styles.screen}>
            <View style={styles.description}>
                <Text style={{color: Colors.light}}>The Process of determining which process will own CPU for execution while another process is on hold.</Text>
                <Text style={{color: Colors.light}}>Let's begin! with selecting the below algorithms.</Text>
            </View>
            <View style={styles.flatContainer}>
                <FlatList
                        data={ALGORITHMS}
                        keyExtractor={(item, id) => item.id}
                        renderItem={renderAlgorithms}
                        style= {styles.flatList}
                        numColumns={2}
                    />
            </View>
           </View>
        </View>
    );
};

AlgorithmsScreen.navigationOptions = navigationData => {
    return ({
        headerShown : true,
    })
}

const styles = StyleSheet.create({
    description:{
        flex:1,
        paddingLeft:20,
        paddingTop:20,
        paddingRight:20,
    },
    greenBg:{
        backgroundColor: Colors.green,
        flex:1
    },
    screen: {
        backgroundColor:Colors.screen,
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
        marginTop:20,
        flex:1
    },
    flatContainer: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection:'row',
    },
    flatList: {
        flexDirection:'column'
    }
});

export default AlgorithmsScreen;