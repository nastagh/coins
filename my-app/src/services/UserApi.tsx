import { LoginProps } from "components/FormLogin";
import { PersonalDataProps } from "components/FormPersonData";
import instance from "utils/axios";


const paths = {
  passwordReset: 'password-reset/',
  user: 'user/',
  users: 'users/',
  verify: 'verify/',
  forgotPassword: 'forgot-password',
  session: 'session/',
  profile: 'profile'
}

export default class UserApi {

  static async sendVerificationEmail(email: string) {
    return instance.post(`/${paths.passwordReset}${paths.user}`, {
      email
    })
  }

  static async verifyCode(code: string) {
    return instance.get(`/${paths.passwordReset}${paths.user}${paths.verify}${code}`)
  }

  static async changePassword(code: string, password: string) {
    return instance.post(`/${paths.passwordReset}${paths.user}${paths.forgotPassword}`, {
      code,
      password
    })
  }

  static async login({ email, password }: LoginProps) {
    return instance.post(`/${paths.session}${paths.user}`, {
      email,
      password
    })
  }

  static async logout(accessToken: string) {
    return instance.delete(`/${paths.session}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
  }

  static async getPersonalData(accessToken: string) {
    return instance.get(`/${paths.users}${paths.profile}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
  }

  static async changePersonalData(data: PersonalDataProps) {
    return instance.put(`/${paths.users}`, {
        firstname: data.firstName,
        lastname: data.lastName,
        gender: data.gender
    }, {
      headers: {
        'Authorization': `Bearer ${data.accessToken}`
      }
    }
    )
  }
}