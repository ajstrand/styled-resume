const defaultResumeDataObj = {
  header: {
    name: "First Last",
    site: "https://example.com",
    emailLinkValue: "mailto:foobar@example.com",
    emailLabel: "foobar@example.com",
  },
  education: [
    {
      type: "college",
      name: "A school",
      dateRange: "200X - 20XX",
      programOrDegree: "Bachelor's, Computer Science",
    },
  ],
  experience: [
    {
      companyName: "Tech Co.",
      dateRange: "June 201XX - Present",
      jobTitle: "Team Lead",
      jobDescription: [
        {
          text: `Ex novum deserunt consetetur mea, his te dolores constituto,
        ea vivendum percipitur efficiantur sit. Quo ei ipsum assentior. Te eos viris elitr,
        te atqui possit quo. Reque altera graeco vis et, ad nisl suavitate laboramus nam,
        nulla graeci quaeque an sit. Sumo ullum velit eam et.
        Te vix tollit expetendis, te has veniam eligendi rationibus. `,
        },
        {
          text: `Ex novum deserunt consetetur mea, his te dolores constituto,
        ea vivendum percipitur efficiantur sit. Quo ei ipsum assentior. Te eos viris elitr,
        te atqui possit quo.`,
        },
      ],
    },
    {
      companyName: "Software Corp",
      dateRange: "May 201XX - September 20XX",
      jobTitle: "Software Engineer",
      jobDescription: [
        {
          text: `Ex novum deserunt consetetur mea, his te dolores constituto,
            ea vivendum percipitur efficiantur sit. Quo ei ipsum assentior. Te eos viris elitr,
            te atqui possit quo. `,
        },
        {
          text: `Ex novum deserunt consetetur mea, his te dolores constituto,
            ea vivendum percipitur efficiantur sit. Quo ei ipsum assentior. Te eos viris elitr,
            te atqui possit quo. Reque altera graeco vis et, ad nisl suavitate laboramus nam,
            nulla graeci quaeque an sit. Sumo ullum velit eam et.
            Te vix tollit expetendis, te has veniam eligendi rationibus. `,
        },
      ],
    },
  ],
  projects: [
    {
      dateRange: "June 20XX",
      title: "Loren ipsum",
      desc: `Ex novum deserunt consetetur mea, his te dolores constituto,
            ea vivendum percipitur efficiantur sit. Quo ei ipsum assentior. Te eos viris elitr,
            te atqui possit quo. `,
    },
    {
      dateRange: "October 20XX",
      title: "Loren ipsum",
      desc: `Ex novum deserunt consetetur mea, his te dolores constituto,
            ea vivendum percipitur efficiantur sit. Quo ei ipsum assentior. Te eos viris elitr,
            te atqui possit quo. `,
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Go",
    "React",
    "React Native",
    "Jest",
    "Webpack",
    "SCSS",
    "NodeJS",
    "SQL",
  ],
};

export default defaultResumeDataObj;
