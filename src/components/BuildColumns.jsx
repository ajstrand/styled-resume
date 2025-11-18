import './BuildColumns.css'

const generateColumns = (first, second, third) => {
  return (
    <div className='details'>
      <div className='left-column details'>
        <div className='plain-right-column-title'>{third},</div>
        <div className='plain-left-column-name'>{first}</div>
      </div>
      <div className='right-column'>
        <div className='plain-left-column-date-range'>- {second}</div>
      </div>
    </div>
  )
}

export const generateAllColumns = (first, second, third, fourth, modifier) => {
  const Element = modifier || 'div'
  return (
    <>
      {generateColumns(first, second, third)}
      <Element className='list plain-right-column-description'>
        {fourth}
      </Element>
    </>
  )
}

export default generateColumns
