import { EducationDetails } from './ResumeBodyStyles.jsx'
const EducationSection = (props) => {
  const { config } = props
  let data

  const list = config.map((section) => {
    data = {
      name: section.name,
      date: section.dateRange,
      program: section.programOrDegree
    }

    const { name, date, program } = data

    return (
      <EducationDetails key={section.toString()}>
        <span>{name}</span>
        <span>{program}</span>
        <span>{date}</span>
      </EducationDetails>
    )
  })
  return list
}

export default EducationSection
