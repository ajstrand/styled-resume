import { expect, test } from 'vitest'


import { render } from "@testing-library/preact";
import "@testing-library/jest-dom/extend-expect";
import resumeDataObj from "../src/components/defaultResumeDataTemplate";
import ExperienceSection from "../src/components/ExperienceSection";
test("renders a experience component with job data", async () => {
  const { getAllByText } = render(
    <ExperienceSection config={resumeDataObj.experience} />
  );
  const completeText = resumeDataObj.experience[0].jobDescription[0].text;
  const qwerty = completeText.substring(0, 5);
  const regex = new RegExp(`${qwerty}`, "i");

  const elementsThatMatch = getAllByText(regex);

  if (Array.isArray(elementsThatMatch)) {
    elementsThatMatch.forEach((el) => expect(el).toHaveTextContent(regex));
  } else {
    expect(elementsThatMatch).toHaveTextContent(completeText);
  }
});
