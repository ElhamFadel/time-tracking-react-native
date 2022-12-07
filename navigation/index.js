import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import {Image} from 'react-native';
import {
    // Browse,Explore,Login,Setting,
    Welcome
    // ,Product
} from '../screens';

// import {theme} from '../constants';
const screens = createStackNavigator({
    // Browse,Explore,Login,Setting,
    Welcome
    // ,Product
},{
    defaultNavigationOptions:{
        headerStyle:{},
        headerBackImage:<Image />,
        headerBackTitle:null,
        headerLeftContainerStyle:{},
        headerRightContainerStyle:{}
    }
})

export default createAppContainer(screens);