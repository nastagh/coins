export const accounts = [
  {
    name: 'Google',
    img: '../assets/images/google-symbol.png'
  },
  {
    name: 'Apple',
    img: '../assets/images/apple.png'
  }
]


export const passwordEyes = {
  eyeOpen: '../assets/images/show.svg',
  eyeClose: '../assets/images/hidden.svg'
}

export enum HomePageButtons {
  Sessions = 'sessions',
  Transactions ='transactions',
  PersonalData ='personal Data',
  Lougout = 'lougout'
}

export const ArrayHomePageButtons = [
  HomePageButtons.Sessions,
  HomePageButtons.Transactions,
  HomePageButtons.PersonalData,
  HomePageButtons.Lougout,
]