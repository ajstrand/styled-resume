import styled from '@emotion/styled'

import PropTypes from 'prop-types'
import { useState } from 'preact/hooks'
import {
  LeftColumn,
  RightColumn,
  TwoColumnSection,
  ResumeBody
} from './ResumeBodyStyles.jsx'

import { css } from '@emotion/css'

import Header from './Header.jsx'

import SkillsSection from './SkillsSection.jsx'
import EducationSection from './EducationSection.jsx'
import ExperienceSection from './ExperienceSection.jsx'
import SectionAndHeader from './SectionHeader.jsx'

const ResumeGridContainer = styled.div`
  height: 100%;
  background-color: #ffffff;
  display: grid;
  width: ${(props) => (props.resumeWidth ? props.resumeWidth : '100%')};
  @media print {
    width: 100%;
    display: block;
  }
`
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
      className={css`
        h4 {
          font-family: 'Yantramanav', sans-serif;
          margin: 0.2em;
        }
        p {
          font-family: 'Yantramanav', sans-serif;

          margin: 0.2em;
          font-size: 1rem;
        }
        margin-bottom: 1em;
      `}
    >
      {children}
    </div>
  )
}

const ResumeContent = (props) => {
  const { config } = props
  const [localTheme, setData] = useState(props.userColors)

  return (
    <ResumeGridContainer>
      <Header theme={localTheme} config={config.header} />
      <ResumeBody>
        <SummarySection>
          <h4>Summary</h4>
          <p>
            Full-stack software engineer with ten years of experience developing
            user interfaces, marketing websites, and web applications for
            companies in the insurance, finance, advertising, retail, and
            nonprofit sectors.
          </p>
        </SummarySection>
        <Block theme={localTheme} componentType='experience' config={config} />
        <TwoColumnSection>
          <LeftColumn>
            <Block
              theme={localTheme}
              componentType='education'
              config={config}
            />
          </LeftColumn>
          <RightColumn>
            <Block componentType='skills' config={config} />
          </RightColumn>
        </TwoColumnSection>
      </ResumeBody>
    </ResumeGridContainer>
  )
}

ResumeContent.propTypes = {
  config: PropTypes.object
}

export default ResumeContent
