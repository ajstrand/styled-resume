import { SkillsStyles } from './ResumeBodyStyles'

const SkillsSection = (props) => {
  const { config } = props
  const skillsList = config.map((value, index) => {
    const nextVal = config[index + 1]
    return nextVal ? value.concat(', ') : value
  })
  const jsx = <SkillsStyles>{skillsList}</SkillsStyles>
  return jsx
}

export default SkillsSection
