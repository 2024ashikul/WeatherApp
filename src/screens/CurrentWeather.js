import React from "react"
import { View,Text, SafeAreaView , StyleSheet} from "react-native"
import {Feather} from '@expo/vector-icons'
import RowText from "../components/RowText"
import { weatherType } from "../utilities/weatherType"

const CurrentWeather = ({weatherData}) => {

      const {wrapper ,container,feels,highLowWrapper,highlow,bodyWrapper,description,message} = styles

      const {main : {temp,feels_like, temp_max, temp_min  }, weather} = weatherData
      const weatherCondition = weather[0]?.main
      return (
            <SafeAreaView style={[wrapper, {backgroundColor : weatherType[weatherCondition]?.backgroundColor}]}>
                  <View style={container}>
                        <Feather name={weatherType[weatherCondition]?.icon} size={100} color="white" />
                        <Text>Current Weather</Text>
                        <Text style={temp}> {`${temp}°`}</Text>
                        <Text style={feels}>{ `Feels like ${feels_like}`}</Text>

                        <RowText messageOne ={`High : ${temp_max}`} messageTwo ={`Low : ${temp_min}`} 
                        containerStyles={highLowWrapper}
                        messageOneStyles ={highlow} 
                        messageTwoStyles ={highlow} 
                        />
                  </View>
                  <RowText messageOne ={weather[0]?.description} messageTwo ={weatherType[weatherCondition]?.message} 
                        containerStyles={bodyWrapper}
                        messageOneStyles ={description} 
                        messageTwoStyles ={message} 
                  />
                  
            </SafeAreaView>

            
      )
}


const styles = StyleSheet.create({
      container:{
            
            flex :1,
            alignItems : 'center',
            justifyContent :'center'
      },
      wrapper:{
            flex:1,
      },
      temp:{
            color:'black',
            fontSize :48
      },feels:{
            fontSize:30,
            color:'black'
      },highlow:{
            color:'black',
            fontSize:20
      },highLowWrapper:{
            flexDirection :'row'
      },bodyWrapper:{
            justifyContent:'flex-end',
            alignItems :'flex-start',
            paddingLeft :25,
            marginBottom :14
      },description:{
            fontSize : 43,
      }, message:{
            fontSize:25
      }
})

export default CurrentWeather