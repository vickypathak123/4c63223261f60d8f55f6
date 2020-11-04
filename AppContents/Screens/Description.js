import React, { useEffect, useState } from 'react'
import {
    View,
    Text
} from 'react-native'

const Description = () => {

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

    }, [])

    useEffect(() => {
        console.log("GetThedata", IsResponseList.length)
    }, [IsResponseList])

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{
                fontSize: 20,
                color: 'black'
            }}>
                {IsResponseList.length}
            </Text>

        </View>
    )


}
export default Description