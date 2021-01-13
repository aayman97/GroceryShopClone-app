import React, { Component, useEffect, useState } from 'react';
import {View,SafeAreaView, ScrollView,Dimensions,Image, TouchableWithoutFeedback, FlatList, TouchableOpacity,StyleSheet} from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Tabs
,Tab,ScrollableTab, TabHeading,Spinner
} from 'native-base';
import { AntDesign ,Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import {connect} from 'react-redux'
import ShoppingIcon from '../Components/ShoppingIcon';

const AddToBasket = ({productName,weight,price,route,basket,checkInBasket,addToBasket,clearBasket}) => {

 const [quantity,setQuantity] = useState(0)
 const navigation = useNavigation()

 useEffect(() => {
    {navigation.setOptions({
        headerTitleStyle : {
          fontSize : 24,color : '#3c91cd'},
          headerShown : true,
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
                <Ionicons name="arrow-back" size={32} color="#3c91cd" style ={{paddingLeft : 10}} onPress ={() => navigation.goBack()}/>
            )
          },
          title : route.params.name
         
  })}
 },[])

   return(
    
     <View style ={style.container}>

         <View style ={style.productAndTextContainer}>

         <Image style ={style.productImage} source ={{uri : route.params.product_img}}/>
        
         
         <Text style={style.productName}> {route.params.name} </Text>
         <Text style ={style.productWeight}> {route.params.weight}</Text>
         <Text style ={style.productPrice}> {route.params.price} </Text>

         </View>

         <View style ={style.dataContainer}>
           <View style ={style.QtyContainer}>
            <Text style ={style.QtyText}> Qty </Text>
              
            <View style ={style.counter}>
                 <AntDesign name="minus" size={24} color="black"  onPress ={() => {
                     if(quantity > 0){
                         setQuantity(quantity-1)
                     }
                 }}/>
                 <Text style ={{fontSize : 17,fontWeight : 'bold'}}> {quantity} </Text>
                 <AntDesign name="plus" size={24} color="black" onPress ={() => setQuantity(quantity+1)}/>
            </View>
           </View>

           <View style ={style.QtyContainer}>
            <Text style ={style.TotalText}> Total </Text>
                 <Text style ={style.Total}> {quantity}{quantity > 0 ? '*'+route.params.price : ''} </Text>
           </View>

            <View style = {style.descriptionContainer}>
            <ScrollView scrollEnabled ={true}>
               <Text style ={style.descriptionText}>
               Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit, 
               sed do eiusmod tempor incididunt ut 
               labore et dolore magna aliqua. 
               Ut enim ad minim veniam, 
               quis nostrud exercitation ullamco laboris 
               nisi ut aliquip ex ea commodo consequat. 
               Duis aute irure dolor in reprehenderit 
               in voluptate velit esse cillum dolore eu fugiat 
               nulla pariatur. Excepteur sint occaecat cupidatat non proident
               , sunt in culpa qui officia deserunt mollit anim id est laborum.
               </Text>
            </ScrollView>
            </View>
         </View>
         
        <View  style ={style.addToCartButton}>
         <Button block style ={{backgroundColor : '#d2691e',borderRadius : 5}}
         onPress ={() => addToBasket( route.params)}
         disabled ={quantity > 0 ? false : true}
         >
             <Text style ={{fontSize : 20,letterSpacing : 0.2}}> Add to cart</Text>
         </Button>
         </View>
     </View>
   ) 
}


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const style = StyleSheet.create({
    container : {
        flex :4,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor :'white' 
    },
    productAndTextContainer : {
      flex : 2,
      justifyContent : 'center',
      alignItems : 'center',
    },
    productImage : {
        width : screenWidth*0.4,
        height : screenWidth*0.4,
        borderRadius : 10,
        resizeMode : 'contain'
    },
    productName : {
        fontSize : 20,
        color : 'black',
        fontWeight : '400',
        paddingTop : 10,
        letterSpacing : 0.2
    },
    productWeight : {
        fontSize : 17,
        paddingTop : 10
    },
    productPrice : {
        fontSize : 27,
        fontWeight : 'normal',
        paddingTop : 5,
        paddingBottom : 15,
        letterSpacing : 0.5
    },
    dataContainer : {
        width : screenWidth,
        height : screenHeight*0.4,
        flex : 2,
        paddingTop : 30,
       //justifyContent : 'center',
       alignItems : 'center',
       top: -50
    },
    QtyContainer : {
        width : screenWidth,
        height : screenHeight*0.08,
        justifyContent : 'flex-start',
        alignItems : 'center',
        flexDirection : 'row'
    },
    QtyText : {
        fontSize : 27,
        marginLeft : 10,
        letterSpacing : 0.2
    },
    counter : {
        width : screenWidth*0.27,
        height : screenHeight*0.05,
        //backgroundColor : 'black',
        marginLeft : 30,
        borderRadius : 5,
        alignItems : 'center',
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        borderWidth : 1,
        borderColor : 'gray'
    },
    TotalText : {
        fontSize : 27,
        marginLeft : 4,
        letterSpacing : 0.2
    },
    Total : {
        fontSize : 27,
        fontWeight : 'normal',
        marginLeft : 15,
        letterSpacing : 0.2,
        color : '#d2691e'
    },
    descriptionContainer : {
        width : screenWidth*0.92,
        height : screenHeight*0.3,
        top : -10,
        marginLeft : 15,
        marginRight : 15,
        marginTop : 5,
        // backgroundColor :'black'
    },
    descriptionText : {
        color : 'gray',
        opacity : 0.8,
        fontSize : 20,
        fontWeight : '300'
    },
    addToCartButton : {
        width : screenWidth*0.92,
        height : screenHeight*0.09,
        alignItems : 'center',
        justifyContent : 'flex-start'
    }

     
})

function mapStateToProps(state){
    return {
        basket : state,
    }
}
function mapDispatchToProps(dispatch){
    return {
        addToBasket : (item) => dispatch({type : 'ADD_TO_BASKET',payload : item}),
        clearBasket : () => dispatch({type : 'CLEAR_BASKET',payload : ''})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddToBasket);