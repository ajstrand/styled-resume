import styled from '@emotion/styled'
import { css } from '@emotion/css'

export const BodyCommonStyles = css`
  font-weight: 500;
  font-family: 'Khula', sans-serif;
  list-style-type: none;
  font-size: 1rem;
  color: var(--textSecondaryColor);
  @media screen and (min-width: 30em) {
    list-style-type: circle;
  }
`




export const ExperienceProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
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






