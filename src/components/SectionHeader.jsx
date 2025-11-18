import './SectionHeader.css'

const SectionAndHeader = (props) => {
  const { sectionTitle, children } = props

  // useEffect(() => {
  //   setData(theme.mainColors)
  // }, [theme])

  if (sectionTitle === 'experience') {
    return (
      <div className="experience-section">
        <div className="section-header">{sectionTitle}</div>
        {children}
      </div>
    )
  }

  if (sectionTitle === 'education' || sectionTitle === 'skills') {
    return (
      <div className="section">
        <div className="section-header-no-border">
          {sectionTitle}
        </div>
        {children}
      </div>
    )
  } else {
    return (
      <div className="section">
        <div className="section-header">{sectionTitle}</div>
        {children}
      </div>
    )
  }
}

export default SectionAndHeader
