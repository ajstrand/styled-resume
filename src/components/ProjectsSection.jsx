import { css } from '@acab/ecsstatic'

import { ExperienceProjectItem } from './ResumeBodyStyles.jsx'

import { LeftColumn, RightColumn } from './ColumnComponents.jsx'

export const ProjectDescList = ({ children }) => {
  const styles = css`
    padding: 0;
  `
  return <ul className={styles}>{children}</ul>
}

export const ProjectDescListItem = ({ children }) => {
  const styles = css`
    list-style-type: none;
  `
  return <li className={styles}>{children}</li>
}

const ProjectsSection = (props) => {
  const { config } = props
  if (config === null || config === undefined) {
    return null
  }
  const projectList = config.map((project) => {
    const { title, dateRange, desc } = project
    const jsx = (
      <ExperienceProjectItem key={title.toString()}>
        <LeftColumn>
          <span className='projectName'>{title}</span>
          <span className='dateRange'>{dateRange}</span>
        </LeftColumn>
        <RightColumn>
          <ProjectDescList>
            <ProjectDescListItem>{desc}</ProjectDescListItem>
          </ProjectDescList>
        </RightColumn>
      </ExperienceProjectItem>
    )
    return jsx
  })
  return projectList
}

export default ProjectsSection
