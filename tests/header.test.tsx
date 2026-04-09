
import { expect, test } from 'vitest'

import { render } from "@testing-library/preact";
import "@testing-library/jest-dom/extend-expect";
import resumeDataObj from "../../components/defaultResumeDataTemplate";

import Header from "../components/Header";
test("renders a header component with the user's name", async () => {
  const { getByText } = render(<Header config={resumeDataObj.header} />);
  const nameText = getByText(/First Last/i);
  expect(nameText).toHaveTextContent(resumeDataObj.header.name);
});
