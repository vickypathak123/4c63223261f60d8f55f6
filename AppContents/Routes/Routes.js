import React from 'react'
import {

} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainScreen from '../Screens/MainScreen'
import Description from '../Screens/Description'

const Stack = createStackNavigator()

const mainstack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="main" component={MainScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Des" component={Description} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default mainstack