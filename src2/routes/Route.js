import React, { useState, Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderComponent from './../components/HeaderComponent';
import { Button, Text, View, TouchableOpacity, Animated, Image, Dimensions} from "react-native";
import Home from "../screens/Home";
const Stack = createStackNavigator();

function RootStack(props) {

    function Mystack() {
        return (
            <Stack.Navigator

                headerMode={"float"}

                screenOptions={{
                    header: ({ scene, previous, navigation }) => {
                        const title ='Covid19 Tracker';
                        
                        return (
                                <HeaderComponent title={title}/>
                        );
                    }
                }}
            >
                <Stack.Screen name="Home" component={Home} options={{title:'Home'}} />

            </Stack.Navigator>
        );
    }
	
	return <Mystack/>
}
export default RootStack;