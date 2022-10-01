export interface User {
  id: string
  name: string
  email: string
  password: string
  profile_picture: string | null
  is_admin: boolean
  is_moderator: boolean
  created_at: Date
  updated_at: Date
}

export interface InsertUserData {
  name: string
  email: string
  password: string
}

export interface LoginUserData {
  email: string
  password: string
}
