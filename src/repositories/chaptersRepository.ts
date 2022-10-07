import { Chapter, ChapterData } from '../models/chapterModels'
import { prisma } from '../database/prisma'

export const createChapter = async (insertData: ChapterData): Promise<Chapter> => {
  return await prisma.chapter.create({ data: insertData })
}

export const findChapterBySeasonAndChapterNum = async (season: number, chapterNum: number): Promise<Chapter> => {
  return await prisma.chapter.findFirst({ where: { AND: [{ season }, { chapter_num: chapterNum }] } })
}