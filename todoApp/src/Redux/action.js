


export const todoActions={
    ADD_TODO_REQUEST:"ADD_TODO_REQUEST",
    ADD_TODO_SUCCESS:"ADD_TODO_SUCCESS",
    ADD_TODO_FAILURE:"ADD_TODO_FAILURE"
}

export const addTodoRequest=(()=>{
    return {
        type:todoActions.ADD_TODO_REQUEST
    }
})

export const addTodoSuccess=((data)=>{
    return {
        type:todoActions.ADD_TODO_SUCCESS,
        payload:data
    }
})

export const addTodoFailure=(()=>{
    return {
        type:todoActions.ADD_TODO_FAILURE
    }
})