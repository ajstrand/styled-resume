import { css } from '@acab/ecsstatic'

import PropTypes from 'prop-types'
import { useState } from 'preact/hooks'
import { ResumeBody } from './ResumeBodyStyles.jsx'

import Header from './Header.jsx'

import EducationSection from './EducationSection.jsx'
import { TwoColumnSection, LeftColumn } from './ColumnComponents.jsx'
import ExperienceSection from './ExperienceSection.jsx'
import SectionAndHeader from './SectionHeader.jsx'

const ResumeGridContainer = ({ children }) => {
  const styles = css`
    height: 100%;
    background-color: #ffffff;
    display: grid;
    width: '100%';
    @media print {
      width: 100%;
    }
  `
  return <div className={styles}>{children}</div>
}

const Block = (props) => {
  const { componentType, config, theme } = props
  const components = {
    experience: ExperienceSection,
    // projects: ProjectsSection,
    education: EducationSection
    // skills: SkillsSection
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

const ResumeContent = (props) => {
  const { config } = props
  const [localTheme, setData] = useState(props.userColors)

  return (
    <ResumeGridContainer>
      <Header theme={localTheme} config={config.header} />
      <ResumeBody>
        <Block theme={localTheme} componentType='experience' config={config} />
        <TwoColumnSection>
          <LeftColumn>
            <Block
              theme={localTheme}
              componentType='education'
              config={config}
            />
          </LeftColumn>
          {/* <RightColumn>
            <Block componentType="skills" config={config} />
          </RightColumn> */}
        </TwoColumnSection>
      </ResumeBody>
    </ResumeGridContainer>
  )
}

ResumeContent.propTypes = { config: PropTypes.object }

export default ResumeContent
