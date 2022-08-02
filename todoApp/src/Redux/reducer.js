import { todoActions } from "./action"




const initState={
    todo:[],
    loading:false,
    errors:false
}

export const todoReducer=((state=initState,action)=>{
     switch(action.type){
        case todoActions.ADD_TODO_REQUEST:{
            return {
                ...state,
                loading:true,
                errors:false
            }
        }
        case todoActions.ADD_TODO_SUCCESS :{
            return {
                ...state,
                loading:false,
                errors:false,
                todo:action.payload
            }
        }
        case todoActions.ADD_TODO_FAILURE :{
            return {
                ...state,
                loading:false,
                errors:true
            }
        }
        default :
        return state
     }
})