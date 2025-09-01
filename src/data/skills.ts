export type SkillItem = { name: string; icon: string }

export const skills = {
  language: [
    { name: 'JavaScript', icon: 'js' },
    { name: 'TypeScript', icon: 'ts' },
    { name: 'Java', icon: 'java' },
    { name: 'Python', icon: 'py' },
    { name: 'C++', icon: 'cpp' }
  ] as SkillItem[],

  frontend: [
    { name: 'HTML', icon: 'html' },
    { name: 'CSS', icon: 'css' },
    { name: 'SCSS', icon: 'sass' },
    { name: 'ReactJS', icon: 'react' },
    { name: 'NextJS', icon: 'next' },
    { name: 'Redux', icon: 'redux' },
    { name: 'MUI', icon: 'mui' },
    { name: 'Tailwind', icon: 'tailwind' }
  ] as SkillItem[],

  backend: [
    { name: 'Node.js', icon: 'node' },
    { name: 'Express', icon: 'express' },
    { name: 'Spring Boot', icon: 'spring' }
  ] as SkillItem[],

  database: [
    { name: 'MySQL', icon: 'mysql' },
    { name: 'MongoDB', icon: 'mongodb' }
  ] as SkillItem[],

  tools: [
    { name: 'Figma', icon: 'figma' },
    { name: 'Vitest', icon: 'vitest' },
    { name: 'Cypress', icon: 'cypress' },
    { name: 'Postman', icon: 'postman' },
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
    { name: 'GitLab', icon: 'gitlab' }
  ] as SkillItem[]
}
