import type { Service } from '../types/Service'
import { iconDesign, iconDev, iconApp, iconPhoto } from '../assets/images/image'

export const services: Service[] = [
  {
    id: 1,
    title: 'Frontend Development',
    description:
      'Creating responsive, interactive, and user-friendly interfaces with React, TypeScript, and modern web technologies.',
    icon: iconApp
  },
  {
    id: 2,
    title: 'Backend Development',
    description: 'Building scalable and secure backend services using Node.js and Java Spring.',
    icon: iconDev
  },
  {
    id: 3,
    title: 'Database Design',
    description: 'Designing efficient and optimized database schemas to ensure data integrity and high performance.',
    icon: iconDesign
  },
  {
    id: 4,
    title: 'Continuous Learning & Growth',
    description: 'Always exploring new tools and best practices to improve code quality and performance.',
    icon: iconPhoto
  }
]
