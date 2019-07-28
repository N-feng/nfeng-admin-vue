import { post } from '@/utils/request'
import { task } from './config'

export function addTask(params) {
  return post(task.add, params)
}

export function deleteTask(taskId) {
  return post(task.delete, { taskId })
}

export function updateTask(params) {
  return post(task.update, params)
}

export function getTask(taskId) {
  return post(task.detail, { taskId })
}

export function getTaskList() {
  return post(task.list)
}
