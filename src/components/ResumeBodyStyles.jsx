import { css } from '@acab/ecsstatic'

export const BodyCommonStyles = css`
  font-weight: 500;
  font-family: 'Khula', sans-serif;
  list-style-type: none;
  font-size: 0.95em;
  color: var(--textSecondaryColor);
  @media screen and (min-width: 30em) {
    list-style-type: circle;
  }
`
export const ResumeBody = ({ children }) => {
  const styles = css`
    padding: 10px;
    display: grid;
    grid-column: 1;
    grid-auto-rows: auto;
    grid-gap: var(--primarySpacing);
    @media print {
      padding: 6px;
      grid-gap: 3px;
    }
  `
  return <div className={styles}>{children}</div>
}

export const Section = ({ children }) => {
  const styles = css`
    grid-auto-rows: min-content;
    display: grid;
    grid-gap: var(--smallSpacing);
  `
  return <div className={styles}>{children}</div>
}

export const ExperienceProjectSection = ({ children }) => {
  const styles = css`
    display: flex;
    flex-direction: column;
    margin-top: 1em;
    background-color: darkseagreen;
    flex-basis: 90vw;
    @media screen and (min-width: 30em) {
      display: grid;
      grid-template-areas: 'title description';
      grid-gap: var(--primarySpacing);
      grid-template-columns: minmax(auto, 135px) 1fr;
    }
    @media print {
      .details {
        flex-direction: row;
      }
    }
  `
  return <div className={styles}>{children}</div>
}

export const ExperienceProjectItem = ({ children }) => {
  const styles = css`
    display: flex;
    flex-direction: column;
    flex-basis: 90vw;
    @media screen and (min-width: 30em) {
      display: grid;
      grid-template-areas: 'title description';
      grid-gap: var(--primarySpacing);
      grid-template-columns: minmax(auto, 135px) 1fr;
    }
    @media print {
      margin-top: 5px;
      .details {
        flex-direction: row;
        display: flex;
        margin-right: 1em;

        div {
          margin-right: 1em;
        }
      }
    }
  `
  return <div className={styles}>{children}</div>
}

export const EducationDetails = ({ children }) => {
  const styles = css`
    span {
      margin-right: 2em;
      font-weight: 500;
      font-family: 'Khula', sans-serif;
      list-style-type: none;
    }
    @media print {
      .details {
        font-size: 8px;
        flex-direction: row;
        display: flex;
        margin-right: 1em;

        div {
          margin-right: 1em;
        }
      }
    }
  `
  return <div className={styles}>{children}</div>
}

export const SkillsStyles = ({ children }) => {
  const styles = css`
    font-weight: 500;
    font-family: 'Khula', sans-serif;
    color: var(--textSecondaryColor);
    @media print {
      font-size: 8px;
      flex-direction: row;
      display: flex;
      margin-right: 1em;
    }
    @media screen and (max-width: 30em) {
      font-size: 9px;
      flex-direction: row;
      display: flex;
      margin-right: 1em;
    }
  `
  return <span className={styles}>{children}</span>
}
