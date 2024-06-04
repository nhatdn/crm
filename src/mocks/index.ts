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
