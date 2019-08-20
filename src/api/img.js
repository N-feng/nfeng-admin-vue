import service, { post, get } from '@/utils/request'
import { img } from './config'

export function addImg(e) {
  const formData = new FormData()
  const { file } = e
  formData.append('file', file)
  formData.append('fileName', file.name)
  file.status = 'uploading'
  return service.request({
    url: img.imgAdd,
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: formData,
  })
}

export function deleteImg(fileName) {
  return post(img.imgDelete, { fileName })
}

export function getImg(fileName) {
  return get(img.imgGet, { params: { fileName } })
}

export function getImgList() {
  return post(img.imgList)
}
