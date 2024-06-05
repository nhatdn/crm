import { TUser } from '@/types/type'
import { Images } from '@/assets'
import configs from '@/configs'

export const user: TUser = {
  id: 1,
  role: 'CEO, Admin',
  fullname: 'Sébastien Hanouna',
  avatar: Images.AvatarAdmin,
  email: configs.USERNAME
}

export const listContact = Array(200)
  .fill(0)
  .map((_, index) => ({
    id: index,
    name: 'Romain Gillig',
    email: 'romain@gillig.studio',
    typeName: 'Particulier',
    telephone: '06 88 65 26 87',
    opportunity: 'Formation 3D',
    responsable: 'Sébastien',
    etiquettes: [
      {
        value: 'BTP',
        color: 'red'
      },
      {
        value: 'BtoB',
        color: 'blue'
      },
      {
        value: '+1',
        color: 'dark'
      }
    ]
  }))
