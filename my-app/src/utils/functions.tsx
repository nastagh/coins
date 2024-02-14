

export const validatePassword =  (password: string) => {
  if (password.length>=7) {
    if (password.split('').filter(item => parseInt(item)).length >=1) {
      if (password.match(/[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]/)) {
        return true;
      }
    }

  } else {
    return false;
  }
}

