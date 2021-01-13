import React, { Component, useEffect, useState } from 'react';
import {View,SafeAreaView, ScrollView,Dimensions,Image, TouchableWithoutFeedback,StyleSheet} from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Tabs
,Tab,ScrollableTab, TabHeading,Spinner
} from 'native-base';

const LongTypeContainer = ({categoryName,imageURL,onPress}) => {
    return (
        <TouchableWithoutFeedback onPress ={onPress}>
        <View>
         
          <Image source ={{uri : imageURL}} 
        style={style.longTypeContainer}/>
         
         <View style ={style.textContainer}>
          <Text style ={style.longTypeText}> {categoryName} </Text>
        </View>
        </View>
        </TouchableWithoutFeedback>
    )
}


const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

const style = StyleSheet.create({
    longTypeContainer : {
        width : width*0.92,
        height : height*0.12,
        marginVertical : 5,
        borderRadius : 10,
        position : 'relative',
        resizeMode : 'cover'
    },
    longTypeText : {
        color : 'black',
        fontSize : 20,
        fontWeight : 'bold',
        letterSpacing : 0.2,
     
    },
    textContainer : {
        position : 'absolute',
        bottom : width*0.1,
        left : width*0.04,
        backgroundColor : 'rgba(255,255,255,0.9)',
        borderRadius : 10
    }
})

export default LongTypeContainer;