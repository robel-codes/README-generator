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
      "[[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  
  ## Repository Description
  ###### [Back to Table of Contents](#table-of-contents)
  ${data.description}

  ## Table of Contents
  * [Repository Description](#repository-description)
  * [Installation Instructions](#installation)
  * [Usage Information](#usage)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Test Instructions](#test-instructions)
  * [Questions](#questions)
  
  
  ### Installation
  ###### [Back to Table of Contents](#table-of-contents)
  ${data.installation}
  
  
  ## Usage
  ### Workflow [Back to Table of Contents](#table-of-contents)
  ${data.usage}
  
  
  ### Screenshots (Building this application)
  ###### [Back to Table of Contents](#table-of-contents)
  #### Demo I createad ![Screen shot 1](${data.screenshot1})
  
  #### Demo I createad ![screenshot 2](${data.screenshot2})

  ${renderLicenseSection(data.license)}
  
  ## Contribution Guidelines
  ###### [Back to Table of Contents](#table-of-contents)
  ${data.contribute}
  
  ## Test Instructions
  ###### [Back to Table of Contents](#table-of-contents)
  ${data.test}

  ## Questions
  ###### [Back to Table of Contents](#table-of-contents)
  ${data.userName}

  You can email me if you have any questions at: ${data.email}
 
`;
}

module.exports = generateMarkdown;
