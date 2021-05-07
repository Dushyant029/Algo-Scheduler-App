import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import AlgorithmScreen from '../screens/AlgorithmsScreen';
import SimulatorScreen from '../screens/SimulatorScreen';
import { ActionBarImage } from '../components/ActionBarImage';
import Colors from '../constants/Colors';

const AppNavigator = createStackNavigator({
    ScheduleMethods : {
        screen: AlgorithmScreen
    },
    Simulator : {
        screen : SimulatorScreen
    }
},{
    defaultNavigationOptions : {
        headerTitleStyle : {
        },
        headerBackTitleStyle : {
        },
        headerRight: () => <ActionBarImage />,
        headerTintColor:'#fff',
        headerStyle: {
            backgroundColor:Colors.green,
            shadowColor : '#5bc4ff',
            shadowOpacity: 0,
            shadowOffset: {
            height: 0,
            },
            shadowRadius: 0,
            elevation: 0
        }
    }
})

export default createAppContainer(AppNavigator);
