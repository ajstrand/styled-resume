import styled from '@emotion/styled'


export const ProjectDescList = styled.ul`
  padding: 0;
`;
export const ProjectDescListItem = styled.li`
  list-style-type: none;
`;

const ProjectsSection = (props) => {
  const { config } = props;
  if (config === null || config === undefined) {
    return null;
  }
  const projectList = config.map((project) => {
    const { title, dateRange, desc } = project;
    const jsx = (
      <div className='experience-project-item' key={title.toString()}>
        <div className='plain-left-column'>
          <span className="projectName">{title}</span>
          <span className="dateRange">{dateRange}</span>
        </div>
        <div className='plain-right-column'>
          <ProjectDescList>
            <ProjectDescListItem>{desc}</ProjectDescListItem>
          </ProjectDescList>
        </div>
      </div>
    );
    return jsx;
  });
  return projectList;
};

export default ProjectsSection;
