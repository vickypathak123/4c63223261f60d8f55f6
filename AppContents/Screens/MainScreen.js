import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    StatusBar,
    TouchableOpacity
} from 'react-native'
import DeviceInfo from 'react-native-device-info'
import { } from 'react-native-gesture-handler'

const MainScreen = ({ navigation }) => {

    const [IsResponseList, SetResponseList] = useState([])
    const [IsPageCount, SetPageCount] = useState(0)


    useEffect(() => {
        fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${IsPageCount}`, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((JsonResponse) => {
                SetResponseList(JsonResponse.hits)
            })
            .catch((error) => {
                console.log("GetTheError", error)
            })

        const interval = setInterval(() => {
            SetPageCount(prevCount => prevCount + 1);
            CallTheApi()
        }, 10000)
        return () => {
            clearInterval(interval);
        }
    }, [IsPageCount])



    const CallTheApi = () => {
        console.log("GetpageCount", IsPageCount)
        fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${IsPageCount}`, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((JsonResponse) => {
                //let array = JsonResponse.hits;
                var arr3 = IsResponseList.concat(JsonResponse.hits)
                console.log("GetTheresult", arr3)
                //const interest = [...IsResponseList, ...JsonResponse.hits];


                SetResponseList(arr3)
            })
            .catch((error) => {
                console.log("GetTheError", error)
            })

    }

    useEffect(() => {
        console.log
        if (IsResponseList.length > 0) {

        }
    }, [IsResponseList])


    return (
        <View style={styles.MainContainer}>
            <StatusBar translucent hidden />
            {DeviceInfo.hasNotch() &&
                <View style={{
                    width: '100%',
                    height: 30
                }} />}
            <FlatList
                style={{
                    flex: 1,

                }}
                contentContainerStyle={{
                    paddingBottom: 40
                }}
                data={IsResponseList}
                bounces={false}
                onEndReached={() => {
                    SetPageCount(prevCount => prevCount + 1);
                    CallTheApi()
                }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={{
                            width: '90%',
                            height: 160,
                            backgroundColor: 'white',
                            borderRadius: 10,
                            shadowColor: "#000",
                            alignSelf: 'center',
                            marginTop: 10,
                            marginBottom: 10,
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.32,
                            shadowRadius: 5.46,
                            elevation: 9,
                            flexDirection: 'column'

                        }}
                            onPress={() => {

                                navigation.navigate('Des')
                            }}>
                            <View style={{
                                width: '100%',
                                height: 40,
                                alignItems: 'center',
                                flexDirection: 'row',

                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    color: 'black',
                                    marginLeft: 10,
                                    marginRight: 10
                                }}
                                    numberOfLines={1}>
                                    title : {item.title}
                                </Text>
                            </View>

                            <View style={{
                                width: '100%',
                                height: 40,
                                alignItems: 'center',
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    color: 'black',
                                    marginLeft: 10,
                                    marginRight: 10
                                }}
                                    numberOfLines={1}>
                                    URL : {item.url}
                                </Text>


                            </View>

                            <View style={{
                                width: '100%',
                                height: 40,
                                alignItems: 'center',
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    color: 'black',
                                    marginLeft: 10,
                                    marginRight: 10
                                }}>
                                    Create at : {item.created_at}
                                </Text>
                            </View>


                            <View style={{
                                width: '100%',
                                height: 40,
                                alignItems: 'center',
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    color: 'black',
                                    marginLeft: 10,
                                    marginRight: 10
                                }}>
                                    Author : {item.author}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,

    },

    TextContainer: {
        fontSize: 20,
        color: 'black'
    }

})

export default MainScreen;