import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { jsxDecorator } from "storybook-addon-jsx";
import testResumeData from "../components/testResumeData";
import ResumeContent from "../components/ResumeContent";
import { withA11y } from "@storybook/addon-a11y";

export default {
  component: ResumeContent,
  title: "Resume",
  decorators: [withKnobs, jsxDecorator, withA11y]
};

export const Default = (): JSX.Element => (
  <ResumeContent config={testResumeData} />
);
