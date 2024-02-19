import { HomePageButtons } from "./info";


export const validatePassword = (password: string) => {
  if (password.length >= 7) {
    if (password.split('').filter(item => parseInt(item)).length >= 1) {
      if (password.match(/[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]/)) {
        return true;
      }
    }

  } else {
    return false;
  }
}

export const getCorrectPath = (button: string) => {
  return (button === HomePageButtons.Logout) ? '/login' : `/${button.split(' ').join('')}`
}

export const getCorrectButtonName = (button: string) => {
 return button.replace(button[0], button[0].toUpperCase())
}