import styled from "@emotion/styled";
import { Section } from "./ResumeBodyStyles.jsx";

const SectionHeader = styled.div`
  font-weight: 600;
  font-family: 'Yantramanav', sans-serif;
  font-size: var(--headerPrimarySize);
  color: #000000;

  text-transform: capitalize;

  border-bottom: 1px solid;
  font-size: var(--headerPrimarySize);
  margin-bottom: -5px;
  @media print {
    .details div {
    font-size:12px;
    flex-direction: row;
    }
  }
`;

const SectionAndHeader = (props) => {
	const { sectionTitle, children } = props;

	// useEffect(() => {
	//   setData(theme.mainColors)
	// }, [theme])
	const jsx = (
		<Section>
			<SectionHeader color={"#ffdffd"}>{sectionTitle}</SectionHeader>
			{children}
		</Section>
	);
	return jsx;
};

export default SectionAndHeader;
