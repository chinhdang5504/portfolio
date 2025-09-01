export type Project = {
  id: number
  title: string
  role: 'Frontend Developer' | 'Backend Developer' | 'Fullstack Developer'
  shortDescription: string
  time: string
  technology: string[]
  responsibilities: string[]
  linkSource?: string
  linkDemo?: string
  image: string
}
