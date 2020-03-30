import React, {useState, Component} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {connect} from 'react-redux';

class CitizensList extends Component{
  
    render(){return(
        <FlatList
				keyExtractor={(item,index)=> item.id.toString()}
				extraData={this.props.citizenList}
				data={this.props.citizenList}
				renderItem={(itemData,key)=>
                <View style={styles.citizenContainer} >
				<View style={styles.citizenDetailsContainer}>
						<Text style={styles.details}>
							Name : {itemData.item.name}
						</Text>
						<Text style={styles.details}>
							Age : {itemData.item.age}
							</Text>
						<Text style={styles.details}>
							Country : {itemData.item.country}
						</Text>
						<Text style={styles.details}>
							Covid Status : {itemData.item.isCovidPositive?'Yes':'No'}
						</Text>
						
						{/*<Text>{abc}</Text>*/}
						</View>
						<View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
						<TouchableOpacity
							style={{height:50, width: 50,alignItems: 'center', activeOpacity : 0.9, borderRadius:27, borderWidth:3, borderColor: '#000', justifyContent:'center' }}
							onPress={()=>{
								console.log('inside button', itemData.item.id);
								 this.props.changeStatus(itemData.item.id)
									 this.forceUpdate();
							}}
						>
						{console.log('covid status',itemData.item)}
							{itemData.item.isCovidPositive?<Ionicons name="md-checkmark" size={40} color="black"  />:
							<Ionicons name="md-close" size={40} color="black"  />}
						</TouchableOpacity>
						</View>
						
					</View>
            }


        />
    )}
}
const styles= StyleSheet.create({
    
	citizenContainer:{
		margin:10,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: '#DCB049',
		backgroundColor: '#FFE6CC',
		flexDirection: 'row',
	},
	citizenDetailsContainer:{
		flex:5,
		paddingLeft: 4
	},
	details:{
		fontSize:15,
		fontWeight:'normal', 
		margin:4,
	
	},
});



const mapStateToProps=(state)=>{
    return {citizenList:state.AppFeaturesReducer.citizensDetails}
};

 

export default connect(mapStateToProps)(CitizensList);
