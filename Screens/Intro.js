import React from 'react'
import { Image, StyleSheet, View ,Dimensions} from 'react-native'
import {Text} from 'native-base'
import AppIntroSlider from 'react-native-app-intro-slider'
import { Ionicons } from '@expo/vector-icons'; 

const Intro = (props) => {

    const slides = [
        {
          key: 'one',
          title: '',
          text: 'Welcome to GroceryShop app',
          image: require('../assets/Intro1.png'),
          backgroundColor: '#59b2ab',
        },
        {
          key: 'two',
          title: '',
          text: 'Here you can access the grocery from your mobile ',
          image: require('../assets/Intro2.png'),
          backgroundColor: '#febe29',
        },
        {
          key: 'three',
          title: '',
          text: 'Start your shopping right now !!',
          image: require('../assets/Intro3.png'),
          backgroundColor: '#22bcb5',
        }
      ];

function renderItem({item}){
    return(
        <View style ={{flex : 1,backgroundColor : item.backgroundColor }}>
            <View style ={{flex : 1,alignItems : 'center'}}>
                <Text style ={{fontSize : 27,marginVertical : 20,color : 'white',fontWeight : '900'}}> {item.title}</Text>
                <Image source={item.image} style={{width : width*0.7,height : height*0.5,resizeMode : 'contain',marginLeft : 10}}/>
                <Text style ={{fontSize : 20,marginVertical : 10,color : 'white',fontWeight : '500',width : width*0.8,textAlign : 'center'}}> {item.text}</Text>
            </View>
        </View>
    )
}

const renderPreviousButton =() =>{
    return(
        <View style ={{ 
        width : width*0.15,
        height : width *0.15,
        borderRadius : ( width *0.16)/2,
        backgroundColor : '#D95500',
        alignItems : 'center',
        justifyContent : 'center',
        marginLeft : 10
        }}>
        <Ionicons name="chevron-back-outline" size={30} color="white" />
        </View>
    )
}

const renderNextButton =() =>{
    return(
        <View style ={{ 
        width : width*0.15,
        height : width *0.15,
        borderRadius : ( width *0.16)/2,
        backgroundColor : '#D95500',
        alignItems : 'center',
        justifyContent : 'center',
        marginRight : 10,
        }}>
        <Ionicons name="chevron-forward-outline" size={30} color="white" />
        </View>
    )
}

const renderDoneButton =() =>{
    return(
        <View style ={{ 
        width : width*0.26,
        height : width *0.15,
        borderRadius : (width*0.2)/2,
        backgroundColor : '#D95500',
        alignItems : 'center',
        justifyContent : 'center',
        }}>
        <Text style ={{color : 'white',fontSize : 12,letterSpacing : 0.2}}> Get Started</Text>
        </View>
    )
}

    return (
     <AppIntroSlider 
     renderItem ={renderItem} 
     data ={slides}
     renderPrevButton ={renderPreviousButton}
     showPrevButton = {true}
     renderNextButton ={renderNextButton}
     dotStyle ={{backgroundColor : 'white', width : width*0.025, height : width *0.025,borderRadius : ( width *0.025)/2, marginHorizontal : 10}}
     activeDotStyle ={{backgroundColor : '#D95500',width : width*0.025, height : width *0.025,borderRadius : ( width *0.025)/2, marginHorizontal : 10}}
     renderDoneButton ={renderDoneButton}
     onDone ={() => props.navigation.navigate('Home')}
     />
    )
}

export default Intro

const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({})
