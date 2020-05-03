import { utils } from 'nfeng-ui-vue'
import { img } from './config'

const { get } = utils.service

export function addImg(e) {
  const formData = new FormData()
  const { file } = e
  formData.append('file', file)
  formData.append('fileName', file.name)
  file.status = 'uploading'
  return utils.service.request({
    url: img.imgAdd,
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: formData
  })
}

export function deleteImg({ imgId }) {
  return get(img.imgDelete, { params: { imgId } })
}

export function getImgList() {
  return get(img.imgList)
}
