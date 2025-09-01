import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiSass,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiMui,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiFigma,
  SiVitest,
  SiCypress,
  SiPostman,
  SiGit,
  SiGithub,
  SiGitlab
} from 'react-icons/si'
import { BiLogoJava } from 'react-icons/bi'

type Props = { icon: string; className?: string }

const map: Record<string, React.ElementType> = {
  js: SiJavascript,
  ts: SiTypescript,
  java: BiLogoJava,
  py: SiPython,
  cpp: SiCplusplus,
  html: SiHtml5,
  css: SiCss3,
  sass: SiSass,
  react: SiReact,
  next: SiNextdotjs,
  redux: SiRedux,
  mui: SiMui,
  tailwind: SiTailwindcss,
  node: SiNodedotjs,
  express: SiExpress,
  spring: SiSpringboot,
  mysql: SiMysql,
  mongodb: SiMongodb,
  figma: SiFigma,
  vitest: SiVitest,
  cypress: SiCypress,
  postman: SiPostman,
  git: SiGit,
  github: SiGithub,
  gitlab: SiGitlab
}

export default function SkillIcon({ icon, className }: Props) {
  const Icon = map[icon] ?? SiJavascript
  return <Icon className={className} aria-hidden />
}
