import { post } from '@/utils/request'
import { project } from './config'

export function addProject(params) {
  return post(project.projectAdd, params)
}
