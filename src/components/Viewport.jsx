import { useState } from 'preact/hooks'
const Viewport = ({ children }) => {
  const [size, setSize] = useState('760px')

  const onChange = (event) => {
    const num = event.target.value
    const stringValue = num.toString()
    setSize(`${stringValue}`)
  }
  return (
    <div>
      <p>this will change the viewport</p>
      <select onChange={(event) => onChange(event)}>
        <option value={'300px'}>smartphone size</option>
        <option value={'760px'}>desktop size</option>
      </select>
      <div style={{ width: size }}>{children}</div>
    </div>
  )
}

export default Viewport
