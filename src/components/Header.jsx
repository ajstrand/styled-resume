import styled from '@emotion/styled'
import { BodyCommonStyles } from './ResumeBodyStyles.jsx'
import { useState, useEffect } from 'preact/hooks'

export const Description = styled.p`
  ${BodyCommonStyles}
`

// export const Accent = styled.span`
//   font-weight: 600;
//   font-style: italic;
//   color: ${mainColors.textPrimaryColor};
// `;

export const ContactName = styled.span`
  text-transform: capitalize;
  font-family: 'Yantramanav', sans-serif;
  font-weight: 600;
  color: white;
  @media screen and (min-width: 30em) {
    padding-top: unset;
    font-size: var(--headerPrimarySize);
    font-size: 2em;
  }
  @media print {
    font-size: 1.2rem;
  }
`

export const ContactDetails = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  text-align: center;
  @media screen and (min-width: 30em) {
    text-align: right;
  }
  @media print {
    font-size: 1.2rem;
    display: flex;
    flex-direction: row;
    width: fit-content;

    li {
      margin: 1em;
    }
  }
`

export const ContactDetailsAnchorTag = styled.a`
  text-decoration: none;
  color: white;
`

const HeaderBase = styled.header`
  font-family: 'Yantramanav', sans-serif;
  font-size: var(--headerPrimarySize);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--accentColor);
  height: fit-content;
  padding: 1em;
  @media screen and (min-width: 30em) {
    flex-basis: auto;
    padding: 0 20px;
    flex-direction: row;
    justify-content: space-between;
  }
  @media print {
    height: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
`

const Header = (props) => {
  const { name, site, emailLabel, emailLinkValue, phone } = props.config

  const { theme } = props

  const [localTheme, setData] = useState(theme)

  useEffect(() => {
    const { mainColors } = theme
    setData(mainColors)
  }, [theme])

  const list = [
    { label: site, href: site },
    { label: emailLabel, href: emailLinkValue },
    { label: phone }
  ]
  let content
  const objectNotEmpty = Object.keys(props).length > 0
  if (objectNotEmpty) {
    const DetailsList = list.map((dataToRender) => {
      return (
        <li key={dataToRender.label.toString()}>
          <ContactDetailsAnchorTag href={dataToRender.href} target='_blank'>
            {dataToRender.label}
          </ContactDetailsAnchorTag>
        </li>
      )
    })
    content = (
      <HeaderBase>
        <ContactName>{name}</ContactName>
        <ContactDetails>{DetailsList}</ContactDetails>
      </HeaderBase>
    )
  } else {
    content = null
  }
  return content
}

export default Header
