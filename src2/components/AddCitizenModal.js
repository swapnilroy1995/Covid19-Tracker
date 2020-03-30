import React, {useState, Component} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity, Button, Modal, TextInput,Keyboard, TouchableWithoutFeedback} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CountryPicker from 'react-native-country-picker-modal';

export default function AddCitizenModal(props){
  const [userName, setuserName] = useState('');
  const [userAge, setuserAge] = useState('');
  const [userCountry, setuserCountry] = useState('India');
  const [userCovidStatus, setuserCovidStatus] = useState(null);
	const [countryCode, setCountryCode] = useState('IN');
	const onSelect = (country: Country) => {
		setCountryCode(country.cca2);
		setuserCountry(country.name);
	};
    return(
        <Modal 
		style={styles.modalStyle}
		visible={props.isModalVisible}
		animationType="slide"
		>
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} style={{flex:1}}>
			<LinearGradient
				colors={['#C1c3EB', '#C1F5FB', '#A2F0FB']}
				style={{ flex:1, padding: 15, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>

					<Text style={styles.detailsModal}> 
					Name
					</Text>
				<TextInput
					style={[styles.searchBarStyle,{margin:10, width:'80%'}]}
					onChangeText={text => setuserName({text})}
					value={userName.text}
					maxLength={20}
				  />
					<Text style={styles.detailsModal}> 
					Age
					</Text>
				 <TextInput
					style={[styles.searchBarStyle,{margin:10, width:'80%'}]}
					onChangeText={text => setuserAge({text})}
					value={userAge.text}
					maxLength={2}
					keyboardType={'number-pad'}
					
				  />
				  <View style={{marginVertical:20, alignItems:'center'}}>
					<Text style={[styles.detailsModal]}> 
					Country
					</Text>
				 <CountryPicker
					 {...{
						 countryCode,
						 withFlag:true,
						 withFilter:true,
						 withAlphaFilter:true,
						 withFlagButton:true,
						 withCountryNameButton:true,
						 onSelect,
					 }}
					 />
		</View>
					<Text style={styles.detailsModal}> 
					Covid Status
					</Text>
				 <View style={{width:'100%', height: 30, flexDirection: 'row', justifyContent: 'space-around'}}>
						<TouchableOpacity 
						style={ {flexDirection: 'row'}}
						onPress ={()=>setuserCovidStatus(true)}
						>
						<View 
						style={styles.radioButton}
						>
							{
								userCovidStatus===true&&
								<View style={styles.innerRadioButton}/>
							}
						</View>
						<Text style={{fontSize:17}}> Yes </Text>
						</TouchableOpacity>
						<TouchableOpacity 
						style={ {flexDirection: 'row'}}
						onPress ={()=>setuserCovidStatus(false)}
						>
						<View 
						style={styles.radioButton}
						
						>
							{
								userCovidStatus===false&&
								<View style={styles.innerRadioButton}/>
							}
						</View>
						<Text style={{fontSize:17}}> No </Text>
						</TouchableOpacity>
				 </View>
				  <TouchableOpacity 
					style={styles.addCitizen}
					onPress={()=>{
					if(userName.text!==''
					&&userAge.text>0
					&&userCountry!==null
					&&userCovidStatus!==null){
						var info={
							userName:userName.text,
							userAge:userAge.text, 
							userCountry:userCountry, 
							userCovidStatus
							};
							setuserName('');
							setuserAge('');
							setuserCountry('India');
							setCountryCode('IN');
							setuserCovidStatus(null);
						console.log('addcitizen',info);
						props.addCitizen(info);
						props.changeModalVisibility();
						
						return true
						}
						alert('you missed something');
						console.log('failed','userName',userName,'userAge',userAge,'userCountry',userCountry,'userCovidStatus',userCovidStatus);
					}}
				>

				  <Text style={styles.addCitizenText}>
					Add Citizen
				  </Text>
			  </TouchableOpacity>
				  <TouchableOpacity
					style={styles.cancelCitizen}
					onPress={()=> {
						setuserName('');
							setuserAge('');
							setuserCountry('India');
							setCountryCode('IN');
							setuserCovidStatus(null);
					
						props.changeModalVisibility();
					}}
				>

				  <Text style={styles.cancelCitizenText}>
					Cancel
				  </Text>
			  </TouchableOpacity>
			</LinearGradient>
			
			</TouchableWithoutFeedback>
		</Modal>
    )
}
const styles= StyleSheet.create({
    

	searchBarStyle:{ 
		height: 45, 
		borderColor: 'gray', 
		borderWidth: 2, 
		borderRadius:5, 
		marginVertical:10, 
		backgroundColor: '#fff', 
		paddingLeft: 10 
	},
	detailsModal:{
		fontSize:20,
		fontWeight:'700', 
		margin:4,
	
	},
	addCitizen:{
		height:50,
		width:120,
		backgroundColor:'#76E1F4',
		alignItems:'center',
		justifyContent: 'center',
		borderRadius:10, 
		marginTop:20,
		borderWidth:.5,
	},
	addCitizenText:{
		textAlign:'center',
		margin:10,

		
	},
	cancelCitizen:{
		alignItems:'center',
		justifyContent: 'center',
		height:40,
		width:100,
		margin:10,
		borderRadius:5,
		
	},
	cancelCitizenText:{
		textAlign:'center',
		margin:10, 
		marginTop:10,
	},
	modalStyle:{
		flex:1
	},
	radioButton:{
		height:26,
		width:26,
		borderRadius:13,
		borderWidth:2.5,
		borderColor:'#7FC6A6',
		backgroundColor:'#fff',
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: 5
		
	},
	innerRadioButton:{
		height:14,
		width:14,
		borderRadius:7,
		backgroundColor:'#7FC6A6'
		
	}
});