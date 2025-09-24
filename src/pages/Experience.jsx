import React from 'react'
import SectionHeading from '../components/SectionHeading'

const Experience = () => {
  const experiences = [
    {
      role: 'Software Developer',
      company: 'Texol World · Full-time · Kozhikode, Kerala, India (On-site)',
      period: 'Dec 2023 — Present · 1 yr 10 mos',
      points: [
        'Building web applications using React.js and Tailwind CSS',
        'Collaborating with cross-functional teams to deliver features end-to-end',
        'Focusing on performance, accessibility, and maintainability across the stack'
      ]
    },
    {
      role: 'Software Developer Intern',
      company: 'Vinam Solutions Pvt Ltd · Full-time · Kozhikode, Kerala, India (On-site)',
      period: 'Jul 2023 — Nov 2023 · 5 mos',
      points: [
        'Automated system tasks with Bash scripting to improve efficiency',
        'Built an individual project with Golang, Kafka, ClickHouse, SQL, and Gin',
        'Enhanced system performance and reliability through proactive solutions'
      ]
    },
    {
      role: 'MERN Intern',
      company: 'Futura Labs · Full-time · Kozhikode, Kerala, India',
      period: 'Nov 2022 — Nov 2023 · 1 yr 1 mo',
      points: [
        'Practiced MERN stack fundamentals: MongoDB, Express, React, Node.js',
        'Built CRUD features and RESTful APIs with JSON-based workflows',
        'Applied modern front-end patterns and version control best practices'
      ]
    },
    {
      role: 'IT Specialist',
      company: 'direction group of institutions private limited · Part-time · Remote',
      period: 'Mar 2021 — Aug 2022 · 1 yr 6 mos',
      points: [
        'Provided remote IT support, troubleshooting, and system maintenance',
        'Managed user accounts, backups, and security best practices',
        'Reduced downtime by improving monitoring and incident response'
      ]
    }
  ]

  return (
    <section id="experience" className="bg-gray-200 py-20 px-6 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="EXPERIENCE" className="mb-16" />

        <div className="space-y-10">
          {experiences.map((item, idx) => (
            <div key={idx} className="p-6">
              <div className="flex items-baseline justify-between flex-wrap gap-2">
                <h3 className="text-lg font-bold tracking-wider text-black">{item.role}</h3>
                <span className="text-xs font-medium tracking-wider text-gray-600">{item.period}</span>
              </div>
              <div className="text-sm font-medium tracking-wider text-black/70 mt-1">{item.company}</div>
              <ul className="mt-4 list-disc list-inside space-y-2 text-sm text-gray-700 max-w-3xl">
                {item.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience


