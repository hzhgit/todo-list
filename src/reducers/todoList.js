const todoList = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            console.log(action)
            return [...state, { text: action.text, status: action.status }];
        case 'DELETE_TODO':
            return [...state].filter((item, index) => (index !== action.index));
        case 'CHANGE_STATUS':
            let stateCopy = [...state]
            stateCopy[action.id].status = !stateCopy[action.id].status
            console.log(stateCopy)
            return [...stateCopy]
        default:
            return state;
    }
}

export default todoList;