import { prisma } from '../database/prisma'
import { Genre } from '../models/genreModels'

export const findGenresByName = async (name: string): Promise<Genre> => {
  return await prisma.genre.findFirst({ where: { name } })
}
