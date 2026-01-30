import SectionHeading from "../components/SectionHeading";
import { calculateDuration, formatDate } from "../utils/dateUtils";

const Experience = () => {
  const experiences = [
    {
      role: "Software Developer",
      company: "Texol World · Full-time · Kozhikode, Kerala, India (On-site)",
      startDate: "2023-12-01",
      endDate: null,
      points: [
        "Building web applications using React.js and Tailwind CSS",
        "Collaborating with cross-functional teams to deliver features end-to-end",
        "Focusing on performance, accessibility, and maintainability across the stack",
      ],
    },
    {
      role: "Software Developer Intern",
      company:
        "Vinam Solutions Pvt Ltd · Full-time · Kozhikode, Kerala, India (On-site)",
      startDate: "2023-07-01",
      endDate: "2023-11-01",
      points: [
        "Automated system tasks with Bash scripting to improve efficiency",
        "Built an individual project with Golang, Kafka, ClickHouse, SQL, and Gin",
        "Enhanced system performance and reliability through proactive solutions",
      ],
    },
    {
      role: "MERN Intern",
      company: "Futura Labs · Full-time · Kozhikode, Kerala, India",
      startDate: "2022-11-01",
      endDate: "2023-11-01",
      points: [
        "Practiced MERN stack fundamentals: MongoDB, Express, React, Node.js",
        "Built CRUD features and RESTful APIs with JSON-based workflows",
        "Applied modern front-end patterns and version control best practices",
      ],
    },
    {
      role: "IT Specialist",
      company:
        "direction group of institutions private limited · Part-time · Remote",
      startDate: "2021-03-01",
      endDate: "2022-08-01",
      points: [
        "Provided remote IT support, troubleshooting, and system maintenance",
        "Managed user accounts, backups, and security best practices",
        "Reduced downtime by improving monitoring and incident response",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-gray-200 py-20 px-6 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="EXPERIENCE" className="mb-16" />

        <div className="space-y-10">
          {experiences.map((item, idx) => (
            <div key={idx} className="p-6">
              <div className="flex items-baseline justify-between flex-wrap gap-2">
                <h3 className="text-lg font-bold tracking-wider text-black">
                  {item.role}
                </h3>
                <span className="text-xs font-medium tracking-wider text-gray-600">
                  {formatDate(item.startDate)} —{" "}
                  {formatDate(item.endDate, !item.endDate)} ·{" "}
                  {calculateDuration(item.startDate, item.endDate)}
                </span>
              </div>
              <div className="text-sm font-medium tracking-wider text-black/70 mt-1">
                {item.company}
              </div>
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
  );
};

export default Experience;
