import './Header.css'
import { useState, useEffect } from 'preact/hooks'

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
          <a className="contact-details-anchor-tag" href={dataToRender.href} target='_blank'>
            {dataToRender.label}
          </a>
        </li>
      )
    })
    content = (
      <header className="header-base">
        <span className="contact-name">{name}</span>
        <ul className="contact-details">{DetailsList}</ul>
      </header>
    )
  } else {
    content = null
  }
  return content
}

export default Header
