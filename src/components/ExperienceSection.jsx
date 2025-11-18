import { generateAllColumns } from './BuildColumns.jsx'
import './ExperienceSection.css'

const ExperienceSection = (props) => {
  const { config } = props
  const list = config.map((job) => {
    const { companyName, dateRange, jobTitle, jobDescription } = job

    const jobTasks = jobDescription
      ? jobDescription.map((item, index) => {
          const desc = <li key={index.toString()}>{item.text}</li>
          return desc
        })
      : null
    const jsx = (
      <div key={companyName.toString()} className="experience-project-item">
        {generateAllColumns(companyName, dateRange, jobTitle, jobTasks, 'ul')}
      </div>
    )
    return jsx
  })
  return list
}

export default ExperienceSection
