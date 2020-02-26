function generateMarkdown(data) {
  return `
# ${data.title}

badge

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
${data.installation}

### Usage
${data.usage}

### License
${data.license}

### Contributing 
${data.name} is the main cotributor.
${data.contributing}

### Tests 
${data.tests}

###Questions

If you have any questions please contact ${data.name} at ${data.email}

`;
}

module.exports = generateMarkdown;
