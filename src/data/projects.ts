import type { Project } from '../types/Project'
import { ecm, hospital, measurement, watering } from '../assets/images/image'

export const projects: Project[] = [
  {
    id: 4,
    title: 'Measurement Management System',
    role: 'Frontend Developer',
    shortDescription:
      'An enterprise web platform for managing factories, departments, users with role-based access control, and product devices. Designed to streamline operations and support real-time measurement data handling in a secure environment.',
    time: '2025.04 – 2025.08',
    technology: ['ReactJS', 'TypeScript', 'Material UI', 'Redux Toolkit', 'React Query', 'Go Iris', 'MongoDB', 'MQTT'],
    responsibilities: [
      'Designed Figma prototypes to align UI/UX with business requirements and improve development workflow.',
      'Implemented responsive and modular frontend using ReactJS, TypeScript, MUI, Redux Toolkit, and React Query.',
      'Developed management modules for users, departments, factories, products, and devices with role-based permissions.',
      'Collaborated with backend team using Go Iris and MongoDB; documented APIs via Swagger for smoother integration.',
      'Ensured usability, scalability, and maintainability by following clean architecture and coding standards.'
    ],
    linkSource: '',
    linkDemo: '',
    image: measurement
  },
  {
    id: 3,
    title: 'Hospital Management System',
    role: 'Frontend Developer',
    shortDescription:
      'A hospital management system that digitalizes operations such as patient records, doctor and staff management, appointments, and prescription handling to improve efficiency and reduce manual processes.',
    time: '2025.01 – 2025.04',
    technology: ['ReactJS', 'JavaScript', 'MUI', 'Redux Toolkit', 'Spring Boot', 'MySQL'],
    responsibilities: [
      'Designed and prototyped user interfaces in Figma to streamline patient, doctor, and staff workflows.',
      'Implemented responsive UI with ReactJS + MUI, ensuring consistency and usability across modules.',
      'Developed CRUD functionality for prescriptions and integrated it into the overall patient record management.',
      'Worked with REST APIs built on Spring Boot + MySQL to connect frontend with backend services.',
      'Documented REST endpoints with Swagger to improve collaboration and API clarity for the team.'
    ],
    linkSource: 'https://github.com/aqbtech/hospital-management-system',
    linkDemo: '',
    image: hospital
  },
  {
    id: 2,
    title: 'IoT Smart Watering System',
    role: 'Fullstack Developer',
    shortDescription:
      'An IoT-based smart watering system that monitors and manages environmental factors such as soil moisture, air humidity, temperature, and light to automate plant irrigation with scheduling and real-time device control.',
    time: '2024.09 – 2024.12',
    technology: [
      'ReactJS',
      'JavaScript',
      'MUI',
      'Redux Toolkit',
      'Spring Boot',
      'WebSocket / SSE',
      'MySQL',
      'Arduino',
      'ESP32'
    ],
    responsibilities: [
      'Designed the relational database schema in MySQL to manage devices, watering schedules, and environmental sensor data.',
      'Created detailed Figma prototypes to design the system UI and improve team alignment during development.',
      'Implemented the entire user interface with ReactJS, MUI, and Redux for state management, covering device dashboards and watering schedules.',
      'Developed backend CRUD APIs for device management.'
    ],
    linkSource: 'https://github.com/aqbtech/iot-watering',
    linkDemo: '',
    image: watering
  },
  {
    id: 1,
    title: 'E-commerce Platform',
    role: 'Frontend Developer',
    shortDescription:
      'A comprehensive e-commerce platform supporting buyers, sellers, and administrators with full features such as product management, shopping cart, order tracking, and integrated PayLater payment.',
    time: '2024.09 – 2024.12',
    technology: ['ReactJS', 'JavaScript', 'TailwindCSS', 'Spring Boot', 'MySQL', 'Firebase'],
    responsibilities: [
      'Designed and optimized the database schema in MySQL to support scalable product, order, and user management.',
      'Created detailed system wireframes and high-fidelity Figma prototypes to guide the team’s development process.',
      'Implemented the entire frontend with ReactJS and TailwindCSS, covering all core features from product browsing to order management and admin dashboards.',
      'Integrated authentication, state management, and real-time notifications for a seamless user experience.',
      'Documented RESTful APIs with Swagger for clear communication and easier collaboration across the team.',
      'Actively contributed to architectural discussions and best practices, ensuring clean code and maintainable structure.'
    ],
    linkSource: 'https://github.com/aqbtech/HCMUT-E_commerce',
    linkDemo: 'https://hcmut-e-commerce.vercel.app/',
    image: ecm
  }
]
