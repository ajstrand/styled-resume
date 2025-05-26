import { css } from '@acab/ecsstatic'

export const Column = ({ children }) => {
  const styles = css`
    display: flex;
    flex-direction: column;
    flex-basis: 90vw;
  `
  return <div className={styles}>{children}</div>
}

export const PlainLeftColumn = ({ children }) => {
  const styles = css`
    flex-basis: auto;
  `
  return <Column className={styles}>{children}</Column>
}

export const PlainRightColumn = ({ children }) => {
  const styles = css`
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
  return <Column className={styles}>{children}</Column>
}

export const TwoColumnSection = ({ children }) => {
  const styles = css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `
  return <div className={styles}>{children}</div>
}

export const LeftColumn = ({ children }) => {
  const styles = css`
    margin: 0;
    flex-basis: auto;
    @media screen and (min-width: 30em) {
      flex-basis: 200px;
      flex-grow: 9999;
      margin: 0 1em 1em 0;
    }
  `
  return <Column className={styles}>{children}</Column>
}

export const RightColumn = ({ children }) => {
  const styles = css`
    flex-basis: auto;
    @media screen and (min-width: 30em) {
      flex-basis: 15em;
      flex-grow: 1;
    }
  `
  return <Column className={styles}>{children}</Column>
}

export const PlainLeftColumnName = ({ children }) => {
  const styles = css`
    font-weight: 600;
    font-family: 'Yantramanav', sans-serif;
    font-size: var(--headerPrimarySize);
    color: var(--textPrimaryColor);
    text-transform: capitalize;
  `
  return <PlainLeftColumn className={styles}>{children}</PlainLeftColumn>
}

export const PlainLeftColumnDateRange = ({ children }) => {
  const styles = css`
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
  return <PlainLeftColumn className={styles}>{children}</PlainLeftColumn>
}

export const PlainRightColumnTitle = ({ children }) => {
  const styles = css`
    font-weight: 600;
    font-family: 'Yantramanav', sans-serif;
    font-size: var(--headerPrimarySize);
    color: var(--textPrimaryColor);
    text-transform: capitalize;
  `
  return <PlainRightColumn className={styles}>{children}</PlainRightColumn>
}

export const PlainRightColumnDescription = ({ children }) => {
  const styles = css`
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
        margin: 0;
      }
    }
  `
  return <PlainRightColumn className={styles}>{children}</PlainRightColumn>
}
