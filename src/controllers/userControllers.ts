import { Request, Response } from 'express'

import { LoginUserData, InsertUserData } from '../models/userModels'
import * as userServices from '../services/userServices'

interface RequestUserSignIn extends Request {
  body: LoginUserData
}
interface RequestUserSignUp extends Request {
  body: InsertUserData
}

const signIn = async (req: RequestUserSignIn, res: Response): Promise<void> => {
  const { email, password } = req.body
  const userAndToken = await userServices.userLogin({ email, password })
  res.status(200).send(userAndToken)
}

const signUp = async (req: RequestUserSignUp, res: Response): Promise<void> => {
  const { name, email, password } = req.body
  await userServices.createUser({ name, email, password })
  res.status(201).send('Usuário cadastrado com sucesso')
}

export { signIn, signUp }
