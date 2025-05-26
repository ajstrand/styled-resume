import { css } from '@acab/ecsstatic'
import { BodyCommonStyles } from './ResumeBodyStyles.jsx'
import { useState, useEffect } from 'preact/hooks'

export const Description = ({ children }) => {
  return <p className={BodyCommonStyles}>{children}</p>
}

// export const Accent = styled.span`
//   font-weight: 600;
//   font-style: italic;
//   color: ${mainColors.textPrimaryColor};
// `;

export const ContactName = ({ children }) => {
  const styles = css`
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
      font-size: var(--headerPrimarySize);
      font-size: 1em;
    }
  `
  return <span className={styles}>{children}</span>
}

export const ContactDetails = ({ children }) => {
  const styles = css`
    list-style-type: none;
    padding: 0;
    width: 100%;
    text-align: center;
    @media screen and (min-width: 30em) {
      text-align: right;
    }
    @media print {
      display: flex;
      flex-direction: row;
      width: fit-content;

      li {
        margin: 1em;
      }
    }
  `
  return <ul className={styles}>{children}</ul>
}

export const ContactDetailsAnchorTag = ({ children }) => {
  const styles = css`
    text-decoration: none;
    color: white;
  `
  return <a className={styles}>{children}</a>
}

const HeaderBase = ({ children }) => {
  const styles = css`
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
    }
  `
  return <header className={styles}>{children}</header>
}

const Header = (props) => {
  const { name, site, emailLabel, emailLinkValue, phone } = props.config

  const { theme } = props

  const [localTheme, setData] = useState(theme)

  useEffect(() => {
    let { mainColors } = theme
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
