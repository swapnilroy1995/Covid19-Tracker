import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, TextInput, FlatList,Modal} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import CitizensList from './../components/CitizensList';
import AddCitizenModal from './../components/AddCitizenModal'
import {addCitizen, updateList, changeStatus, filter} from './../store/actions/AppFeatures';
import {connect} from 'react-redux';

class Home extends Component{
	constructor(props){
		super(props);
		this.state={
			searchInput: '',
			isCitizenModalVisible : false,
	}
	}
	
	search=()=>{
		alert('hello');
	};
	changeCitizenModalVisibility=()=>{
		this.setState({isCitizenModalVisible: !this.state.isCitizenModalVisible})
	};
	
    render(){
		return(
			<View style={styles.container}>
		<AddCitizenModal 
		isModalVisible={this.state.isCitizenModalVisible} 
		changeModalVisibility={()=>this.changeCitizenModalVisibility()}
		addCitizen={(info)=>this.props.addCitizen(info)}
		/>

			<LinearGradient
				colors={['#ffffff', '#C1F5FB', '#A2F0FB']}
				style={{ flex:1, padding: 15, paddingBottom:0, borderRadius: 5 }}>
			  <TouchableOpacity
				style={styles.addCitizen}
				onPress={()=>{this.changeCitizenModalVisibility()}}
			  >
				  <Text style={styles.addCitizenText}>
					Add Citizen
				  </Text>
			  </TouchableOpacity>

			  <TextInput
				style={styles.searchBarStyle}
				onChangeText={text => {
					this.props.filter('country',text)
					this.setState({searchInput:text});
				}}
				value={this.state.searchInput}
				inlineImageLeft='search_icon'
				onSubmitEditing={() => this.search()}
				placeholder = 'Country Filter'
			  />
				  <Text style={styles.listTitleText}>
					Citizens
				  </Text>
				  
			<CitizensList citizensList={this.props.citizenList} changeStatus={this.props.changeStatus}/>

			  </LinearGradient>
			  
				
			</View>
    )
	}
}
const styles= StyleSheet.create({
    container:{
        flex: 1,
    },
	addCitizen:{
		backgroundColor: '#D7E6FB',
		padding: 13,
		borderRadius:5,
		width:130,
		alignItems: 'center'
	},
	addCitizenText:{
		fontSize:15,
		letterSpacing:2,
		fontWeight: '700'
	},
	listTitleText:{
		fontSize:20,
		letterSpacing:2,
		fontWeight: 'normal',
		marginVertical:10,
		marginLeft:18
	},
	searchBarStyle:{ 
		height: 45, 
		borderColor: 'gray', 
		borderWidth: 2, 
		borderRadius:5, 
		marginVertical:10, 
		backgroundColor: '#fff', 
		paddingLeft: 10 
	},
	citizenContainer:{
		margin:10,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: '#DCB049',
		backgroundColor: '#FFE6CC',
		flexDirection: 'row',
	},
	citizenDetailsContainer:{
		flex:2,
		paddingLeft: 4
	},
	details:{
		fontSize:15,
		fontWeight:'normal', 
		margin:4,
	
	}
});


const mapStateToProps=(state)=>{
    // console.log('inside mapstatetoprops',state);
    // let goal=state.GoalReducer.goalList.map(g=>({key:g.key,goal:g.goal}));
    // console.log('mapped',state.GoalReducer.goalList
		//console.log('inside mapStateToProps', state);	
    return {citizenList:state.AppFeaturesReducer.citizensDetails}
};

 
const mapDispatchToProps=(dispatch)=>{
    return {
        addCitizen:(info)=> dispatch(addCitizen(info)),
        updateList:(enteredKey)=> dispatch(updateList(enteredKey)),
        changeStatus:(id)=> dispatch(changeStatus(id)),
        filter:(filterType, filterTypename)=> dispatch(filter(filterType,filterTypename))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

