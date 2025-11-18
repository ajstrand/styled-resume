import './SkillsSection.css'

const SkillsSection = (props) => {
  const { config } = props
  const skillsList = config.map((value, index) => {
    const nextVal = config[index + 1]
    return nextVal ? value.concat(', ') : value
  })
  const jsx = <span className="skills-styles">{skillsList}</span>
  return jsx
}

export default SkillsSection
