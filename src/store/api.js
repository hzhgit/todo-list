import axios from 'axios'

const baseUrl = 'http://localhost:8080/todos'
export function getTodoList() {
  return axios({
    method: 'get',
    url: baseUrl
  })
}

export function deleteTodo(id) {
  return axios({
    method: 'delete',
    url: `${baseUrl}/${id}`
  })
}

export function addTodo(text, status) {
  return axios({
    method: 'post',
    url: baseUrl,
    data: { content: text, status: status }
  })
}

export function modifyTodo(id, todo) {
  return axios({
    method: 'put',
    url: `${baseUrl}/${id}`,
    data: todo
  })
}