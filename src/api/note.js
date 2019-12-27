import utils from '../../../nfeng-utils'
import { note } from './config'

const { post } = utils.request

export function addNote(params) {
  return post(note.noteAdd, params)
}

export function deleteNote(noteId) {
  return post(note.noteDelete, { noteId })
}

export function updateNote(params) {
  return post(note.noteUpdate, params)
}

export function getNote(noteId) {
  return post(note.noteDetail, { noteId })
}

export function getNoteList() {
  return post(note.noteList)
}
