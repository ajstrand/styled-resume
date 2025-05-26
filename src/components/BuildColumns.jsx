import {
  LeftColumn,
  PlainLeftColumnName,
  PlainLeftColumnDateRange,
  RightColumn,
  PlainRightColumnTitle,
  PlainRightColumnDescription
} from './ColumnComponents.jsx'

const generateColumns = (first, second, third) => {
  return (
    <div class='details'>
      <LeftColumn class='details'>
        <PlainLeftColumnName>{first}</PlainLeftColumnName>
        <PlainLeftColumnDateRange>{second}</PlainLeftColumnDateRange>
      </LeftColumn>
      <RightColumn>
        <PlainRightColumnTitle>{third}</PlainRightColumnTitle>
      </RightColumn>
    </div>
  )
}

export const generateAllColumns = (first, second, third, fourth, modifier) => {
  return (
    <>
      {generateColumns(first, second, third)}
      <PlainRightColumnDescription
        className='list'
        as={modifier ? modifier : null}
      >
        {fourth}
      </PlainRightColumnDescription>
    </>
  )
}

export default generateColumns
