import {CITIZEN_ADDED, CITIZEN_COVID_STATUS_CHANGED, UPDATE_LIST, FILTER_COUNTRY} from './../actionTypes';


export const addCitizen=(citizenInfo) => {
	console.log('inside action');
    return{
        type:CITIZEN_ADDED,
		citizenInfo:citizenInfo
    }
};
export const updateList=() =>{
	
    return{
        type:UPDATE_LIST,
    }
};
export const changeStatus=(id)=>{
    return{
        type:CITIZEN_COVID_STATUS_CHANGED,
		id:id
    }
};
export const filter=(filterType, filterTypeName)=>{
    return async dispatch=> {
        
        if(filterType==='country'){
            dispatch ({type: FILTER_COUNTRY,
                filterTypeName: filterTypeName,
        })}
    }
};