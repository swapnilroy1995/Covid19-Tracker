import React, {Component} from'react'
import {View,TouchableOpacity,Text, Button, StyleSheet} from 'react-native';
export default class HeaderComponent extends Component{
    render(){
        return(
            <View style={styles.headerContainer}>
                
                    <Text style={styles.headerTitle}>
                        {this.props.title} 
                    </Text>
            </View>
        );
    }
}

const styles= StyleSheet.create({
	
	headerContainer: {
		width: "100%",
		alignItems:'center',
		paddingVertical: 15,
	  },
	  headerTitle:{
		  fontSize:22,
		  fontWeight:'600'
	  }
});