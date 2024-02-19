import { LoginProps } from "components/Form";
import instance, { baseUrl } from "utils/axios";


const paths = {
  passwordReset: 'password-reset/',
  user: 'user/',
  verify: 'verify/',
  forgotPassword: 'forgot-password',
  session: 'session/',
}

export default class UserApi {

  static async sendVerificationEmail(email: string) {
    return instance.post(`${baseUrl}/${paths.passwordReset}${paths.user}`, {
      email
    })
  }

  static async verifyCode(code: string) {
    return instance.get(`${baseUrl}/${paths.passwordReset}${paths.user}${paths.verify}${code}`)
  }

  static async changePassword(code: string, password: string) {
    return instance.post(`${baseUrl}/${paths.passwordReset}${paths.user}${paths.forgotPassword}`, {
      code,
      password
    })
  }

  static async login({email,password}: LoginProps) {
    return instance.post(`${baseUrl}/${paths.session}${paths.user}`, {
      email,
      password
    })
  }

  static async logout(accessToken : string) {
    return instance.delete(`${baseUrl}/${paths.session}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
  }
}