import axios from 'axios'

export function getTodoList() {
  return axios({
    method: 'get',
    url: 'https://5e9ec500fb467500166c4658.mockapi.io/todos'
  })
}

export function deleteTodo(id) {
  return axios({
    method: 'delete',
    url: `https://5e9ec500fb467500166c4658.mockapi.io/todos/${id}`
  })
}

export function addTodo(todo) {
  return axios({
    method: 'post',
    url: `https://5e9ec500fb467500166c4658.mockapi.io/todos`,
    data: todo
  })
}

export function modifyTodo(id, todo) {
  return axios({
    method: 'put',
    url: `https://5e9ec500fb467500166c4658.mockapi.io/todos/${id}`,
    data: todo
  })
}