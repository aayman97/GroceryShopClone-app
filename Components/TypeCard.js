import React, { Component, useEffect, useState } from 'react';
import {View,SafeAreaView, ScrollView,Dimensions,Image, TouchableWithoutFeedback,StyleSheet} from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Tabs
,Tab,ScrollableTab, TabHeading,Spinner
} from 'native-base';

const TypeCard = ({url,categoryName,onPress})=> {


    return(
    <TouchableWithoutFeedback onPress ={onPress}>
    <View>
        <Image style ={style.productTypeContainer} source = {{uri : url}}>

        </Image>
        
        <View style ={style.textContainer}>
        <Text  style ={style.typeText}> {categoryName} </Text>
        </View>
    </View>
    </TouchableWithoutFeedback>
    )
}

const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

const style = StyleSheet.create({
    productTypeContainer : {
        width : width*0.45,
        height : width*0.45,
        margin : 5,
        borderRadius : 10,
        position : 'relative',
        resizeMode : 'cover'
    },
    typeText : {
        
        color : 'black',
        fontSize : 20,
        fontWeight : 'bold'
    },
    textContainer : {
        position : 'absolute',
        bottom : 20,
        left : 20,
        backgroundColor : 'rgba(255,255,255,0.9)',
        borderRadius : 10,
        borderColor :'gray',
        borderTopWidth: 0.5
    }
})
export default TypeCard;
