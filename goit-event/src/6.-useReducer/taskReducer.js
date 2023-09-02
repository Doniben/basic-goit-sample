

export const taskReducer = (initialState = [], action) => {
    if(action.type === 'ADD_TASK') {
        return [ ...initialState, action.payload ]
    }
    switch (action.type) {
        case 'ADD_TASK':
            return [ ...initialState, action.payload ]

        case 'DELETE_TASK':
            return initialState.filter( task => task.id !== action.payload )

        case 'TOGGLE_TASK':
            return initialState.map( task => {
                if(task.id === action.payload){
                    return {
                        ...task,
                        done: !task.done
                    }
                }
            })
    
    }
    return initialState;
}
