import { post } from '@/utils/request'
import { project } from './config'

export function addProject(params) {
  return post(project.projectAdd, params)
}

export function deleteProject(projectId) {
  return post(project.projectDelete, { projectId })
}

export function updateProject(params) {
  return post(project.projectUpdate, params)
}

export function getProject(projectId) {
  return post(project.projectDetail, { projectId })
}

export function getProjectList() {
  return post(project.projectList)
}
