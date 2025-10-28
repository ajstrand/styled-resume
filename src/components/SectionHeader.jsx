import styled from '@emotion/styled'

const Section = styled.div`
  grid-auto-rows: min-content;
  display: grid;
  grid-gap: var(--smallSpacing);
  @media print {
    display: block;
  }
`

const ExperienceSection = styled(Section)`
  break-after: page;
`

const SectionHeader = styled.div`
  font-weight: 600;
  font-family: 'Yantramanav', sans-serif;
  font-size: var(--headerPrimarySize);
  color: #000000;

  text-transform: capitalize;

  border-bottom: 1px solid;
  font-size: var(--headerPrimarySize);
  margin-bottom: -5px;
  @media print {
    .details div {
      font-size: 1rem;
      flex-direction: row;
    }
  }
`
const SectionHeaderNoBorder = styled.div`
  font-weight: 600;
  font-family: 'Yantramanav', sans-serif;
  font-size: var(--headerPrimarySize);
  color: #000000;

  text-transform: capitalize;

  font-size: var(--headerPrimarySize);
  @media print {
    .details div {
      font-size: 1rem;
      flex-direction: row;
    }
  }
`

const SectionAndHeader = (props) => {
  const { sectionTitle, children } = props

  // useEffect(() => {
  //   setData(theme.mainColors)
  // }, [theme])

  if (sectionTitle === 'experience') {
    return (
      <ExperienceSection>
        <SectionHeader color={'#ffdffd'}>{sectionTitle}</SectionHeader>
        {children}
      </ExperienceSection>
    )
  }

  if (sectionTitle === 'education' || sectionTitle === 'skills') {
    return (
      <Section>
        <SectionHeaderNoBorder color={'#ffdffd'}>
          {sectionTitle}
        </SectionHeaderNoBorder>
        {children}
      </Section>
    )
  } else {
    return (
      <Section>
        <SectionHeader color={'#ffdffd'}>{sectionTitle}</SectionHeader>
        {children}
      </Section>
    )
  }
}

export default SectionAndHeader
