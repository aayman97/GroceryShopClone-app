import React, { Component, useEffect, useState } from 'react';
import {View,SafeAreaView, ScrollView,Dimensions,Image, TouchableWithoutFeedback,StyleSheet} from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Tabs
,Tab,ScrollableTab, TabHeading,Spinner
} from 'native-base';
import { AntDesign ,Entypo } from '@expo/vector-icons'; 
import { SliderBox } from "react-native-image-slider-box";
import axios from 'axios';
import TypeCard from '../Components/TypeCard';
import LongTypeContainer from '../Components/LongTypeContainer';
import { useNavigation } from '@react-navigation/native';
import ShoppingIcon from '../Components/ShoppingIcon';


const Home = (props) => {

    const images = [require('../assets/vegtables.jpg'),
                    require('../assets/fruits.jpg'),
                    require('../assets/meat.jpg')    
                ]

   const[categories,setCategories] = useState()
   const navigation = useNavigation()

   useEffect( () => {
    axios.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
    .then(res => {
         setCategories(res.data)
        // console.log(categories[0].category_img)
    }).catch(err => console.log(err.message))
    navigation.setOptions({
        headerShown : true
    })  
  
    },[])

    return (
        <View style ={style.Container}>
         {navigation.setOptions({
                  headerTitleStyle : {
                    fontSize : 24,color : '#3c91cd',display : 'none'},
                    headerRight : () => {
                      return (
                        <View style ={{flexDirection : 'row',paddingRight : 10}}>
                        {/* <AntDesign name="search1" size={27} color='#3c91cd' style ={{paddingRight : 10}} /> */}
                        <ShoppingIcon color='#3c91cd'/>
                        </View>
                      )
                    },
                    headerLeft : () => {
                      return(
                       <Entypo name="menu" size={32} color="#3c91cd" style ={{paddingLeft : 10}}/>
                      )
                    },
                    headerTitle : () => <Text style ={{color : "#3c91cd",fontSize : 23}}> Home </Text>
            })}
            <View style ={style.imageSliderContainer}>
               <SliderBox
               images={images}
               sliderBoxHeight = {height*0.36}
               circleLoop
               ImageComponentStyle={{ marginTop: 10,position : 'relative'}}
               dotColor="orange"
               inactiveDotColor="white"
               dotStyle={{
                width: 15,
                height: 15,
                borderRadius: 7.5,
                borderWidth : 2,
                borderColor : 'orange'
               }}
               onCurrentImagePressed ={() => navigation.navigate('Grocery',{index : 0,categories : categories})}
               //currentImageEmitter ={i => console.log(i)}
               />
            </View>

           
            <View style ={style.restContainer}>

         

            <View style ={{flexDirection : 'row',justifyContent :'space-between'}}> 
             
             {categories ? categories.slice(0,Math.floor(categories.length/2)).map((type,index) => {
                 

               return(
                   <TypeCard onPress ={() => navigation.navigate('Grocery',{index : categories.findIndex((element) => type === element),categories : categories})} url = {type.category_img} categoryName = {type.name}/>
               )
                       
               }) : null}

             </View>

               
               {categories ? categories.map((type,index) => {

                  if( index === categories.length/2){
                      return (
                        <LongTypeContainer onPress ={() => navigation.navigate('Grocery',{index : categories.findIndex((element) => type === element),categories : categories})} imageURL = {type.category_img} categoryName = {type.name}/>
                      )
                  }
                  

                           
            }) : null}


              <View style ={{flexDirection : 'row',justifyContent :'space-between'}}> 
             
              {categories ? categories.slice(Math.ceil(categories.length/2)+1,categories.length).map((type,index) => {

                return(
                    <TypeCard onPress ={() => navigation.navigate('Grocery',{index : categories.findIndex((element) => type === element),categories : categories})} url = {type.category_img} categoryName = {type.name}/>
                )
                        
                }) : null}

              </View>


            </View>
        </View>
    )
}

const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

const style = StyleSheet.create({
    Container : {
        flex : 6,
    },
    imageSliderContainer : {
        flex : 2,
        
    },
    restContainer : {
        flex : 4,
       // backgroundColor : 'purple',
        margin : 10,
        alignItems : 'center'
    },
    longTypeContainer : {
        width : width*0.92,
        height : height*0.12,
        marginVertical : 5,
        borderRadius : 10,
        position : 'relative'
    },
    longTypeText : {
        position : 'absolute',
        color : 'black',
        bottom : width*0.1,
        left : width*0.04,
        fontSize : 20,
        fontWeight : 'normal',
        letterSpacing : 0.2
    }
  

   
})
export default Home;