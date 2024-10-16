import React  from "react"
import {FlatList,  SafeAreaView , StyleSheet ,  StatusBar ,ImageBackground} from "react-native"

import ListItem from '../components/ListItem'



const UpcomingWeather = ({weatherData}) => {
    const renderItem = ({item}) => (
        <ListItem 
            condition={item.weather.main} 
            dt_text={item.dt_text} 
            min={item.main.temp_min}
            max={item.main.temp_max} 
        />


    )
    const {container, image} = styles
    return (
        <SafeAreaView style={container}>
            
            <ImageBackground source ={require('../../assets/upcoming.png')} style={image} >    
            
            <FlatList
                data= {weatherData}
                renderItem={renderItem}
                keyExtractor = {(item) => item.dt_text}
                
                
            />
            </ImageBackground>
        </SafeAreaView>
    )
}


const styles =StyleSheet.create({
    container :{
        flex:1,
        marginTop : StatusBar.currentHeight || 0,
        backgroundColor:'royalblue'
    },
    image:{
        flex:1
    }
    
    
})

export default UpcomingWeather