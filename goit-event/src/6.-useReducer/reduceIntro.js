const initialState = [{
    id: 1,
    task: 'Crear el proyecto en Celtx',
    done: false
}]

export const reduceIntro = (initialState, action) => {
    if(action.type === 'ADD_TASK') {
        return [ ...initialState, action.payload ]
    }
  return initialState;
};

const newTask = {
    id: 2,
    task: 'crear el diagrama del paradigma',
    done: false
}

const addNewTask = {
    type: 'ADD_TASK',
    payload: newTask
}

const reducer = reduceIntro(initialState, addNewTask)
// reducer.push(newTask)

console.log(reducer)
