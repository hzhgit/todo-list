export const addToDo = (text, status) => ({
    type: "ADD_TODO",
    text: text,
    status: status
})

export const changeStatus = (id) => ({
    type: "CHANGE_STATUS",
    id: id
})
