
import PropTypes from 'prop-types'
import { useState } from 'preact/hooks'

import "./global-styles.css"

import Header from './Header.jsx'

import SkillsSection from './SkillsSection.jsx'
import EducationSection from './EducationSection.jsx'
import ExperienceSection from './ExperienceSection.jsx'
import SectionAndHeader from './SectionHeader.jsx'


const Block = (props) => {
  const { componentType, config, theme } = props
  const components = {
    experience: ExperienceSection,
    education: EducationSection,
    skills: SkillsSection
  }
  const Tag = components[componentType]
  const resumeDataToRender = config[componentType]
  const dataExists = !!(
    resumeDataToRender !== null && resumeDataToRender !== undefined
  )
  return Tag && dataExists ? (
    <SectionAndHeader theme={theme} sectionTitle={componentType}>
      <Tag theme={theme} config={resumeDataToRender} />
    </SectionAndHeader>
  ) : null
}

const SummarySection = ({ children }) => {
  return (
    <div
      className="summary-section"
    >
      {children}
    </div>
  )
}

const ResumeContent = (props) => {
  const { config } = props
  const [localTheme, setData] = useState(props.userColors)

  return (
    <div className='grid-container'>
      <Header theme={localTheme} config={config.header} />
      <div className='resume-body'>
        <SummarySection>
          <h4>Summary</h4>
          <p>
            Full-stack software engineer with ten years of experience developing
            accessible user interfaces and web applications for
            companies in the insurance, finance, advertising and retail sectors.
          </p>
        </SummarySection>
        <Block theme={localTheme} componentType='experience' config={config} />
        <div className='two-column-section'>
          <div className='plain-left-column'>
            <Block
              theme={localTheme}
              componentType='education'
              config={config}
            />
          </div>
          <div className='plain-right-column'>
            <Block componentType='skills' config={config} />
          </div>
        </div>
      </div>
    </div>
  )
}

ResumeContent.propTypes = {
  config: PropTypes.object
}

export default ResumeContent
