import { post } from '@/nfeng-utils/request'
import { task } from './config'

export function addTask(params) {
  return post(task.taskAdd, params)
}

export function deleteTask(taskId) {
  return post(task.taskDelete, { taskId })
}

export function updateTask(params) {
  return post(task.taskUpdate, params)
}

export function getTask(taskId) {
  return post(task.taskDetail, { taskId })
}

export function getTaskList() {
  return post(task.taskList)
}
