import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

const SplashScreen = () => {

    return (
        <View style={styles.Maincontainer}>
            <Text style={styles.TextContainer}>
                SplashScreen
            </Text>
        </View>
    )

}

const styles = StyleSheet.create({

    Maincontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },

    TextContainer: {
        fontSize: 25,
        color: 'black'
    }

})

export default SplashScreen