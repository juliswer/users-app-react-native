import React from 'react'
import {View, Text} from 'react-native'

const UserDetailScreen = (props) => {
    console.log(props.route.params.userId)
    return (
        <View>
            <Text>User detail</Text>
        </View>
    )
}

export default UserDetailScreen