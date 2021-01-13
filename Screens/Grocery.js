import React, { Component, useEffect, useState } from 'react';
import {View,SafeAreaView, ScrollView,Dimensions,Image, TouchableWithoutFeedback, FlatList, TouchableOpacity,TextInput} from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Tabs
,Tab,ScrollableTab, TabHeading,Spinner
} from 'native-base';
import ProductCard from '../Components/ProductCard';
import Axios from 'axios'
import axios from 'axios';
import { AntDesign ,Entypo,Ionicons  } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import {connect} from 'react-redux'
import ShoppingIcon from '../Components/ShoppingIcon';


const Grocery = ({route,basket}) => {

    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    const[categories,setCategories] = useState(route.params.categories)
    const [selectedTab,setSelectedTab] = useState(() => {
      return route.params.index
    })
    const [loading,setLoading] = useState(true)
    const [categoryImage,setImage] = useState()
    const [sortBy,setSortBy] = useState(() => {
      return false
    })
    const [filterBy,setFilter] = useState(false)
    const [filterLoading,setFilterLoading] = useState(false)
    const [productsTemp,setProducts] = useState([])
    const [doneSorting,setDoneSorting] = useState()
    const [search,openSearch] = useState(false)
    const [searchInput,setSearchInput] = useState('')
    
useEffect( () => {


if(categories){
  setImage(categories[selectedTab].category_img)

  if(sortBy){
    categories[selectedTab].products.sort((a,b) => (a.name > b.name) ? 1 : ((b.name> a.name) ? -1 : 0))
    setDoneSorting(true)
  }
  else {
    categories[selectedTab].products.sort((a,b) => (a.name < b.name) ? 1 : ((b.name <  a.name) ? -1 : 0))
    setDoneSorting(false)
  } 
}
navigation.setOptions({
  headerTitleStyle : {
    fontSize : 24,color : 'black',fontWeight : 'bold'},
    headerTransparent : true,
    headerShown : true,
    headerRight : () => {
      return (
        <View style ={{flexDirection : 'row',paddingRight : 10}}>
        <AntDesign name="search1" size={27} color='black' style ={{paddingRight : 10}} onPress ={() => openSearch(!search)} />
        <ShoppingIcon color='black'/>
        </View>
      )
    },
    headerLeft : () => {
      return(
       <Ionicons name="arrow-back" size={32} color="black" style ={{paddingLeft : 10}} onPress ={() => navigation.goBack()}/>
      )
    },
    headerTitle : categories ? search ? () =>{
       return(
        <TextInput placeholder = ' Search ' 
        style ={{ color : 'black',
        backgroundColor : 'white',
        width : screenWidth*0.6,
        height : screenHeight*0.04,
        borderRadius : 10,
        marginRight : screenWidth*0.1,
        borderWidth : 1
      }}
      onChangeText ={input => setSearchInput(input)}
      />
       )
    }
     : categories[selectedTab].name : 'Grocery'
})


setTimeout(() => {
  setLoading(false)
},4000)
},[selectedTab,sortBy,categories,search])


useEffect(()=> {

 
 
    if(filterBy) {
      setFilterLoading(true)
        const temp = []
         categories.map((p,i) => {
          
             temp.push(p.products)
             return p.products = categories[i].products.filter(product => product.name.length < 5)
          
         })
         setProducts(temp)
         setFilterLoading(false)
      }
      else {
        if(productsTemp.length > 0){
          setFilterLoading(true)
          categories.map((p,i)=> {
           return p.products = productsTemp[i]
          })
        setProducts([])
        setFilterLoading(false)
        }
      }

  
  
 
},[filterBy])



const renderItem = ({ item }) => (
    <ProductCard product ={item} onPress ={() => navigation.navigate('Basket',item)}/>
  );


const renderItemWithSearch = ({ item }) => {
     if(item.name.substring(0,searchInput.length) === searchInput){
       return (
        <ProductCard product ={item} onPress ={() => navigation.navigate('Basket',item)}/>
       )
     }
    
    };

const navigation = useNavigation()

// if(categories){
  if(loading){
   // console.log(loading)
  return(
    <View style ={{flex:1,justifyContent : 'center',alignItems:'center'}}>
    <Spinner size ={10} color = 'gray'/>
    </View>
  )
  }
  else {
   // console.log(loading)
    return(  
    <TouchableWithoutFeedback onPress ={() => {
      setSearchInput('')
      openSearch(false)
    }}
    disabled ={!search}
    >
      <View style ={{flex : 7}}>
         <View style={{flex:3}}>
      <Image source ={{uri : categoryImage}} 
          style={{resizeMode : 'cover',width : undefined,height : undefined,aspectRatio : 1}}/> 
         </View>
        
        <Container style ={{flex : 4}} >
         <Tabs renderTabBar={()=> <ScrollableTab />}
         tabBarUnderlineStyle ={{backgroundColor : 'black' }} 
         tabContainerStyle ={{borderColor : 'white'}}
         onChangeTab = {({i}) => {
           setSelectedTab(i)
           if(search){
            setSearchInput('')
            openSearch(false)
           }

          }}
         initialPage = {route.params.index}
         >
           
         {categories ? categories.map((item,i) => {
            
            return (
                 <Tab key = {i}
                 heading={
                     <TabHeading style ={{backgroundColor : 'white'}}> 
                         <Text style ={{fontSize : 21 , fontWeight : '200', color : 'black'}}>
                        {item.name}
                         </Text>
                     </TabHeading>
                       } 
                      
                       >
    
{       !filterLoading ?  <FlatList
                numColumns = {2}
                data ={item.products}
                renderItem ={searchInput.length > 0 ? renderItemWithSearch : renderItem}
                horizontal={false}
                >
               </FlatList> : (
                   <View style ={{flex:1,justifyContent : 'center',alignItems:'center'}}>
                   <Spinner size ={10} color = 'gray'/>
                   </View>
               )
               }

                     </Tab>
             )
         }) :( <Tab heading={
             <TabHeading >
                 <Spinner color = 'gray'/>
             </TabHeading>
               } 
               ></Tab>) 
               
               }
                
     
  
           
  
         </Tabs>
         </Container>
         
         <View style ={{width : screenWidth , height : screenHeight*0.1, 
             backgroundColor : '#d2691e' , alignItems : 'center'}}>
           
         <View style ={{flex : 3,flexDirection : 'row',alignItems : 'center'}}>
  
         <TouchableWithoutFeedback onPress ={() => sortBy ? setSortBy(prev => prev = false) : setSortBy(prev => prev = true)} >
         <Text style ={{flex : 1 ,fontSize : 40,paddingHorizontal : 50, fontWeight : '200', color : 'white'}}> Sort by</Text>
         </TouchableWithoutFeedback>
  
         <TouchableWithoutFeedback onPress ={() => filterBy ? setFilter(false) : setFilter(true)}>
         <Text style ={{flex : 1,fontSize : 40,fontWeight : '200',color : 'white'}}> Filter</Text>
         </TouchableWithoutFeedback>
         </View>
  
         </View>
   </View>
   </TouchableWithoutFeedback>
   )
  }

}

function mapStateToProps(state){
  return {
      basket : state,
      
  }
}

export default connect(mapStateToProps)(Grocery);