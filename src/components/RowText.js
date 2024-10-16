import React from "react"
import { Text, View, StyleSheet } from "react-native"

const RowText = (props) => {
    const {messageOneStyles, messageTwoStyles , containerStyles, messageOne, messageTwo} = props
    return (
        <View style={containerStyles}>
            <Text style={messageOneStyles}> {messageOne} </Text>
            <Text style={messageTwoStyles}> {messageTwo}</Text>
        </View>
    )
}


export default RowText