function generateMarkdown(data) {

  const license = encodeURI(data.license)
  const contact = () => {
    if (data.email !== null) {
      return `If you have any questions please contact ${data.author} at ${data.email}`
    } else {
      return `If you have any questions please contact ${data.author}.`
    }
  }

  return `
# ${data.title}

![badge](https://img.shields.io/static/v1?label=license&message=${license}&color=blue)

### Description 
${data.description}

### Table of Conents

* [License](#License)
* [Installation](#Installation)
* [Tests](#Tests)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Questions](#Questions)

### Installation

\`\`\`
${data.installation}
\`\`\`


### Usage
${data.usage}

### License

${data.license}

### Contributing 
${data.author} is the main cotributor.
${data.contributing}

### Tests 

\`\`\`
${data.tests}
\`\`\`

### Questions

${contact()}

![Profile Picture](${data.avatar_url})

`;
}

module.exports = generateMarkdown;

