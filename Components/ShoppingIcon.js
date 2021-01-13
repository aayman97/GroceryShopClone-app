import React from 'react'
import {View,SafeAreaView, ScrollView,Dimensions,Image, TouchableWithoutFeedback, FlatList, TouchableOpacity,TextInput} from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Tabs
,Tab,ScrollableTab, TabHeading,Spinner
} from 'native-base';
import { AntDesign ,Entypo,Ionicons  } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import {connect} from 'react-redux'

const ShoppingIcon = ({basket,color}) => {
    return (
        <View>
        <AntDesign name="shoppingcart" size={32} color = {color}  style ={{position : 'relative'}}/>
          <View  style ={{position : 'absolute'
        ,backgroundColor : 'green'
        ,borderRadius : (screenWidth *0.06)/2
        ,width : screenWidth *0.06
        ,height : screenWidth *0.06
        ,justifyContent : 'center',
        alignItems : 'center',
        right : -7,
        bottom : 20
        }}>
            <Text style ={{color : 'white',fontSize : 12}}> {basket.length} </Text>
          </View>
        </View>
    )
}

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

function mapStateToProps(state){
    return {
        basket : state,
        
    }
  }

export default  connect(mapStateToProps)(ShoppingIcon)


