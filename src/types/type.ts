import React from 'react'

export type IPropsWithChildren = {
  children: React.ReactNode | React.ReactNode[]
  fallbackError: React.ReactNode | React.ReactNode[]
}

export type IPropsAuthLayout = {
  children: React.ReactNode
  auth?: boolean
}

export type TLogin = {
  username: string
  password: string
}

export type TUser = {
  id: number
  role: string
  fullname: string
  avatar: string
  email: string
}
