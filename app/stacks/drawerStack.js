import {
    StackNavigator
} from 'react-navigation';
import {
    TouchableHighlight,
    Text,
    View,
    Image
} from 'react-native'
import React from 'react';

import DrawerScreen from './drawerScreen';

const DrawerNavigation = StackNavigator({
    DrawerStack: {screen: DrawerScreen}
}, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {
            backgroundColor: 'rgb(41, 43, 44)',
            paddingLeft: 10,
            paddingRight: 10                       
        },
        title: 'Qrrencys',
        headerTitleStyle: { 
        textAlign:"center", 
        color: 'rgb(252, 220, 122)',
        flex:.9 
    },
        headerTintColor: 'white',
        headerLeft: <View>
            <TouchableHighlight 
                onPress={() => {
                    if(navigation.state.index === 0){
                        navigation.navigate('DrawerOpen');
                    } else {
                        navigation.navigate('DrawerClose');
                    }
                }}>
                <Image source={require('../../img/qrrencys.jpeg')} style={{width: 50, height: 50}}/>
            </TouchableHighlight>
        </View>
    })
})

export default DrawerNavigation;