const todoList = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            console.log(action)
            return [...state, { id: action.id, text: action.text, status: action.status }];
        case "INIT_DATA":
            let data = []
            action.data.forEach(item => {
                data.push({ id: item.id, text: item.content, done: item.status })
            });
            return data;
        case 'DELETE_TODO':
            return [...state].filter(item => item.id !== action.id);
        case 'CHANGE_STATUS':
            let stateCopy = [...state]
            stateCopy.forEach((item) => {
                if (item.id === action.id) {
                    item.status = !item.status
                }
            })
            return [...stateCopy]
        default:
            return state;
    }
}

export default todoList;