export const addToDo = (id, text, status) => ({
    type: "ADD_TODO",
    id: id,
    text: text,
    status: status
})

export const changeStatus = (id) => ({
    type: "CHANGE_STATUS",
    id: id
})

export const initData = (data) => ({
    type: "INIT_DATA",
    data:data
})
