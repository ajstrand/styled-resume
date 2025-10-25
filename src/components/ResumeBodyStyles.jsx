import styled from '@emotion/styled'
import { css } from '@emotion/css'

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
export const ResumeBody = styled.div`
  padding: 10px;
  display: grid;
  grid-column: 1;
  grid-auto-rows: auto;
  grid-gap: var(--primarySpacing);
  @media print {
    padding: 2px;
    //grid-gap: 3px;
    display: block;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 90vw;
`
export const PlainLeftColumn = styled(Column)`
  flex-basis: auto;
`

export const PlainRightColumn = styled(Column)`
  flex-basis: auto;
  grid-area: description;

  .list {
    background-color: black;
  }

  & > ul {
    margin-top: 5px !important;

    padding-left: 1.2em;
    list-style-type: square;
  }

  & > .jobTitle ~ .jobTitle {
    margin-top: 10px;
  }
`

export const TwoColumnSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const LeftColumn = styled(Column)`
  margin: 0;
  flex-basis: auto;
  @media screen and (min-width: 30em) {
    flex-basis: 200px;
    flex-grow: 9999;
    margin: 0 1em 1em 0;
  }
`

export const RightColumn = styled(Column)`
  flex-basis: auto;
  @media screen and (min-width: 30em) {
    flex-basis: 15em;
    flex-grow: 1;
  }
`

export const Section = styled.div`
  grid-auto-rows: min-content;
  display: grid;
  grid-gap: var(--smallSpacing);
  @media print {
    display: block;
  }
`

export const ExperienceProjectSection = styled.div`
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

export const ExperienceProjectItem = styled.div`
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
    ul.list {
      margin: 2px !important;
    }
    .details {
      flex-direction: row;
      display: flex;
      margin-right: 1em;

      div {
        margin-right: 1em;
        font-size: 12px;
        flex-direction: row;
      }
    }
  }
`

export const PlainLeftColumnName = styled(PlainLeftColumn)`
  font-weight: 600;
  font-family: 'Yantramanav', sans-serif;
  font-size: var(--headerPrimarySize);
  color: var(--textPrimaryColor);
  text-transform: capitalize;
  @media print {
    font-size: 12px;
  }
`

export const PlainLeftColumnDateRange = styled(PlainLeftColumn)`
  font-weight: 500;
  font-family: 'Khula', sans-serif;
  list-style-type: none;
  color: var(--textSecondaryColor);
  @media screen and (min-width: 30em) {
    list-style-type: circle;
  }
  text-transform: uppercase;
  font-size: 0.85em;
`

export const PlainRightColumnTitle = styled(PlainRightColumn)`
  font-weight: 600;
  font-family: 'Yantramanav', sans-serif;
  font-size: var(--headerPrimarySize);
  color: var(--textPrimaryColor);
  text-transform: capitalize;
`

export const PlainRightColumnDescription = styled(PlainRightColumn)`
  font-weight: 500;
  font-family: 'Khula', sans-serif;
  color: var(--textSecondaryColor);

  @media screen {
    li {
      margin: 2px;
    }
  }
  @media print {
    li {
      font-size: 10px;
      margin: 0;
    }
  }
`

export const EducationDetails = styled.div`
  span {
    margin-right: 2em;
    font-weight: 500;
    font-family: 'Khula', sans-serif;
    list-style-type: none;
  }
  @media print {
    width: 100%;
    span {
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

export const SkillsStyles = styled.span`
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
