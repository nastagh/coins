import axios from "axios";
import instance, { baseUrl } from "utils/axios";


const paths = {
  user: 'user/',
  verify: 'verify/',
  forgotPassword: 'forgot-password'
}

export default class UserApi {

  static async createEmail(email: string) {
    return instance.post(`${baseUrl}/${paths.user}`, {
      email: email
    })
  }

  static async verifyCode(code: string) {
    return instance.get(`${baseUrl}/${paths.user}${paths.verify}${code}`)
  }

  static async changePassword(code: string, password: string) {
    return instance.post(`${baseUrl}/${paths.user}${paths.forgotPassword}`, {
      code: code,
      password: password
    })
  }
}