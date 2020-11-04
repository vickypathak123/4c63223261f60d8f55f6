/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import React, { useState, useEffect } from 'react'
import SplashScreen from './AppContents/Screens/SplashScreen'
import MainScreen from './AppContents/Screens/MainScreen'
import Routes from './AppContents/Routes/Routes'

const main = () => {
    const [IsmainScreen, SetMainScreen] = useState('SplashScreen')

    useEffect(() => {
        setTimeout(() => {
            SetMainScreen('MainScreen')
        }, 3000);
    }, [IsmainScreen])


    let mainscreen = IsmainScreen === 'SplashScreen' ? <SplashScreen /> : <Routes />
    return mainscreen


}


AppRegistry.registerComponent(appName, () => main);
