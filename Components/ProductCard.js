import React, { Component, useEffect, useState } from 'react';
import {View,SafeAreaView,Dimensions,Image, TouchableNativeFeedback} from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Tabs
,Tab,ScrollableTab, TabHeading
} from 'native-base';
import { Ionicons } from '@expo/vector-icons'; 
import {connect} from 'react-redux'

const ProductCard =({product,onPress,selectedTab,basket})=> {

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

function checkbasket(basket,product){
let temp = false
for(let i = 0;i< basket.length;i++){
    if(basket[i]=== product){
        temp = true
        break;
    }
}
return temp
}





return(
  
    <TouchableNativeFeedback onPress ={onPress}>
    <View style = {{ flex : 2, width : screenWidth*0.5, height : screenWidth*0.5,
    borderWidth : 1, borderColor : 'rgba(220,220,220,0.3)',alignItems : 'center',
    }}>
    <View style ={{marginTop : 15 , alignItems : 'center' }}> 
     <View style ={{flex : 1,width : (screenWidth*0.6)/2
    ,height : (screenWidth*0.495)/2, borderRadius : 12 
    }} >
    <Image source ={{uri : product.product_img}}
     style ={{width : (screenWidth*0.6)/2
        ,height : (screenWidth*0.495)/2}} />
    </View>
    
    <View style = {{flex : 1,flexDirection : 'row',}}>
      
        <View style ={{paddingRight: 50,marginTop : 30}}>
           <Text>{product.name}</Text>
           <Text style ={{fontWeight :'200', fontSize : 12}}>{product.weight}</Text>
           <Text style ={{fontWeight :'200', fontSize : 12}}>EGP {product.price}</Text>
        </View>
        
       {  checkbasket(basket,product)? <Ionicons name="checkmark-circle" size={30} color="#d2691e" style ={{marginTop : 52}} />
        : <Ionicons name="add-circle-sharp" size={30} color="gray" style ={{marginTop : 52}} />
        }
        
    </View>

    </View>  

    </View>
    </TouchableNativeFeedback>

)
 

}

function mapStateToProps(state){
    return {
        basket : state,
        
    }
}

export default connect(mapStateToProps)(ProductCard);