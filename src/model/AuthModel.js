import BaseModel from './BaseModel'
import { auth } from './apiconfig'
import { get, post } from '../nfeng-pc-vue/nfeng-service/api'
/**
 * 登录 model
 */
class AuthModel extends BaseModel {
  constructor() {
    super();
    this.user = '';
    this.pass = '';
    this.userList = [];
    this.rules = {
      user: [
        { validator: 'isNonEmpty', message: '请输入账户' }
      ],
      pass: [
        { validator: 'isNonEmpty', message: '请输入密码' }
      ]
    };
  }
  login (callback) {
    let url = auth.login;
    let param = {
      user: this.user,
      pass: this.pass
    };
    post(url, param).then(res => {
      window.localStorage.setItem('userToken', res.data.token);
      callback(res);
    })
  }
  logOut (callback) {
    let url = auth.logOut;
    let param = {};
    get(url, param).then(res => {
      window.localStorage.removeItem('userToken');
      callback(res);
    })
  }
  register (callback) {
    let url = auth.register;
    let param = {
      user: this.user,
      pass: this.pass
    };
    post(url, param).then(res => {
      callback(res)
    })
  }
  delUser (param, callback) {
    let url = auth.delUser;
    post(url, param).then(res => {
      callback(res)
    })
  }
  getUserInfo () {
    let url = auth.userInfo;
    get(url).then(res => {
      let info = res.data;
      this.user = info.user;
      this.icon = info.icon;
    })
  }
  getUserList () {
    let url = auth.userList;
    get(url).then(res => {
      this.userList = res.data;
    })
  }
}

export default AuthModel