import service, { get } from '@/nfeng-utils/request'
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

export function deleteImg({ imgId }) {
  return get(img.imgDelete, { params: { imgId } })
}

export function getImgList() {
  return get(img.imgList)
}
