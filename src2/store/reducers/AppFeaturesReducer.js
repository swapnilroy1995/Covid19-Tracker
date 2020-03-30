import {CITIZEN_ADDED, CITIZEN_COVID_STATUS_CHANGED, UPDATE_LIST, FILTER_COUNTRY} from './../actionTypes';

const initialState={
    citizensList:[
	{
		id:12345,
		name: 'Prince Charles',
		country: 'England',
		age: 71,
		isCovidPositive: true
	},
	{
		id:123456,
		name: 'Kanika Kapoor',
		country: 'India',
		age: 42,
		isCovidPositive: true
	},
	{
		id:1234567,
		name: 'Anjali Tomer',
		country: 'India',
		age: 27,
		isCovidPositive: false
	},
	{
		id:12345678,
		name: 'Swapnil Roy ',
		country: 'America',
		age: 24,
		isCovidPositive: false
	},
	]
};
function makeid(l)
{
var text = "";
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(var i=0; i < l; i++ )
{  
text += char_list.charAt(Math.floor(Math.random() * char_list.length));
}
return text;
}
const AppFeaturesReducer=(state=initialState,action)=>{
    switch(action.type){
        case CITIZEN_ADDED:{
			var key=makeid(8);
           var citizensList=state.citizensList.concat({
			    id:key,
				name: action.citizenInfo.userName,
				country: action.citizenInfo.userCountry,
				age: action.citizenInfo.userAge,
				isCovidPositive:action.citizenInfo.userCovidStatus})
				//console.log('inside reducer',citizensList)

            return{...state,citizensList:citizensList,citizensDetails:citizensList}
        }
        case CITIZEN_COVID_STATUS_CHANGED:{
			let key=action.id
			
			state.citizensList.forEach(
			v=>{
				if (v.id===key){
					v.isCovidPositive=!v.isCovidPositive;
				}
			}
			);
			//var result = foo.map(el => el.bar == 1 ? {...el, baz: [11,22,33]} : el);
            return{...state, citizensDetails: state.citizensList}
			}
        
        case FILTER_COUNTRY:{
            let citizensDetails = state.citizensList.filter(v=>{
				if(v['country'].startsWith(action.filterTypeName)){
					return v['country'];
				}
				return false;
				});
            return{...state,citizensDetails}
        }
        default: {
            return{...state, citizensDetails: state.citizensList}
        }
    }
};

export default AppFeaturesReducer;