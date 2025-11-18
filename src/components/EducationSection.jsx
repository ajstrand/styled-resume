import './EducationSection.css'

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
      <div key={section.toString()} className="education-details">
        <span>{name}</span>
        <span>{program}</span>
        <span>{date}</span>
      </div>
    )
  })
  return list
}

export default EducationSection
