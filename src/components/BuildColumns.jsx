import {
  LeftColumn,
  PlainLeftColumnName,
  PlainLeftColumnDateRange,
  RightColumn,
  PlainRightColumnTitle,
  PlainRightColumnDescription
} from './ResumeBodyStyles.jsx'

const generateColumns = (first, second, third) => {
  return (
    <div class='details'>
      <LeftColumn class='details'>
        <PlainRightColumnTitle>{third},</PlainRightColumnTitle>
        <PlainLeftColumnName>{first}</PlainLeftColumnName>
      </LeftColumn>
      <RightColumn>
        <PlainLeftColumnDateRange>- {second}</PlainLeftColumnDateRange>
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
