// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge = "";
  if (license === "Apache") {
    badge =
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "BSD 3") {
    badge =
      "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }
  if (license === "GVL-GPL 3.0") {
    badge =
      "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  }
  if (license === "MIT") {
    badge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (license === "None") {
    badge = "";
  }
  return badge;
 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return "";
  }
  else {
    return `## License
    Project license: ${license}`  
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  ${renderLicenseBadge(data.license)}
  
  ## Repository Description
  ###### [Back to Table of Contents](#table-of-contents)
  ${data.description}
  
  ---

  ## Table of Contents
  * [Repository Description](#repository-description)
  * [Installation Instructions](#installation)
  * [Usage Information](#usage)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Test Instructions](#test-instructions)
  * [Questions](#questions)
  
  ---

  ### Installation
  ###### [Back to Table of Contents](#table-of-contents)
  ${data.installation}
  
  ---

  ## Usage
  #### [Back to Table of Contents](#table-of-contents)
  ${data.usage}

  ---

  ${renderLicenseSection(data.license)} 
  
  ${renderLicenseBadge(data.license)}

  ---

  ## Contribution Guidelines
  ###### [Back to Table of Contents](#table-of-contents)
  ${data.contribute}

  ---

  ## Test Instructions
  ###### [Back to Table of Contents](#table-of-contents)
  ${data.test}

  ---

  ## Questions
  ###### [Back to Table of Contents](#table-of-contents)
  If you have any questions at: 

  Email [${data.email}](mailto:${data.email}),

  GitHub [@${data.userName}](https://github.com/${data.userName})
 
`;
}

module.exports = generateMarkdown;
