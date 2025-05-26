import { css } from '@acab/ecsstatic'
import { Section } from './ResumeBodyStyles.jsx'

const SectionHeader = ({ children }) => {
  const styles = css`
    font-weight: 600;
    font-family: 'Yantramanav', sans-serif;
    font-size: var(--headerPrimarySize);
    color: #000000;

    text-transform: capitalize;

    border-bottom: 1px solid;
    font-size: var(--headerPrimarySize);
    margin-bottom: -5px;
  `
  return <div className={styles}>{children}</div>
}

const SectionAndHeader = (props) => {
  const { sectionTitle, children } = props

  const jsx = (
    <Section>
      <SectionHeader color={'#ffdffd'}>{sectionTitle}</SectionHeader>
      {children}
    </Section>
  )
  return jsx
}

export default SectionAndHeader
