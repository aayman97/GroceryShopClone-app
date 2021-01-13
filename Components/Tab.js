import React, { Component } from 'react';
import {View,SafeAreaView} from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Tabs
,Tab,ScrollableTab, TabHeading
} from 'native-base';

const TabComponent = ({title}) => {

return(
    <Tab heading={
        <TabHeading >
           <Text style ={{fontSize : 21 , fontWeight : '200', color : 'black'}}>
            {title}
            </Text>
        </TabHeading>
          } 
           >
         <Text>
             AhmedKSJFKWJKWJKJWLWKLKL;WL;WLW';WWF;'WF;W'F;FW';WF'W;F'WF;'WF;'WF;FJFKWHWI
         </Text>
        </Tab>
   
   
)

}

export default TabComponent;