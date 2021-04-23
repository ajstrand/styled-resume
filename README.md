# styled-resume

> Preact/React library that creates a resume with styled components, html and css grid

[![NPM](https://img.shields.io/npm/v/styled-resume.svg)](https://www.npmjs.com/package/styled-resume) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Example

The below commands will let you view what an example resume looks like

```bash
cd example
npm install
npm run start
```

A config can be provided to resume to change the contents,
although the colors/general css is hard coded at the moment.

The config is a plain JavaScript object that has the following schema/shape

```js
const defaultResumeDataObj = {
  header: {
    name: "First Last",
    site: "https://example.com",
    emailLinkValue: "mailto:foobar@example.com",
    emailLabel: "foobar@example.com",
    phone: "444-555-6661",
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
        ea vivendum percipitur efficiantur sit. `,
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
            ea vivendum percipitur efficiantur sit.  `,
        },
        {
          text: `Ex novum deserunt consetetur mea, his te dolores constituto...
            `,
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
  skills: ["JavaScript", "TypeScript", "HTML"],
};
```

## Install

```bash
npm install --save styled-resume
```

## Usage

```tsx
//TODO: write me when library is done
```

### Issues

TODO: remove `skipLibCheck:true` once `@types/styled-components` can be updated.
https://github.com/DefinitelyTyped/DefinitelyTyped/issues/33311
https://stackoverflow.com/questions/54706594/types-styled-components-duplicate-identifier-formdata

## Acknowledgments

The original design for this resume template comes from and is copyright of [isabelacmor](https://github.com/isabelacmor)

## License

MIT © [ajstrand](https://github.com/ajstrand)
