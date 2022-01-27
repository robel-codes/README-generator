// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Repository Description
  ###### [Back to Table of Contents](#Table-of-Contents)
  ${data.description}

  ## Table of Contents
  * [Repository Description](#Repository-Description)
  * [Installation Instructions](#Install)
  * [Usage Information](#Usage)
  * [References](#Ref)
  * [Repositiory End-Goal Criterea](#Criterea)
  * [Future Project](#Future-Project)
  

  Remember this also, as a developer, your goal should be designing NEW experiences that makes people's lives simple; because as developers, we solve problems that people didn't even knew they had- even better, in a way that they do not understand: We are the super heroes and heriones of tomorrow; so get coding, and I hope this repository helps you along your development. - [Frederick Thomas](https://www.linkedin.com/in/discoverfrederickthomas/), Super Coding Ninja™
  
  ### Installation
  ###### [Back to Table of Contents](#Table-of-Contents)
  ${data.contribute}
  
  
  ## Usage
  ### Workflow [Back to Table of Contents](#Table-of-Contents)
  ${data.accomplish}
  
  
  ### Screenshots (Building this application)
  ###### [Back to Table of Contents](#Table-of-Contents)
  #### Demo I createad ![script.js](${data.scriptjs})
  
  #### Demo I createad ![fileGenerator.js](${data.fileGnerator})
  
  #### Demo I createad ![ReadMe.md](${data.ReadMe})
  
   
  ## License
  ${data.license}

  Please feel free to fork and even collaborate with me on this awesome [repository](https://github.com/supercodingninja/CodeQuiz ).  Thank you for viewing! - Frederick Thomas, Super Coding Ninja™ [2014-Present](https://supercodingninja.github.io/) All Rights Reserved
  
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 


  ### Contribution Guidelines
  ###### [Back to Table of Contents](#Table-of-Contents)
  ${data.contribute}
  
  ## Test Instructions
  ###### [Back to Table of Contents](#Table-of-Contents)
  ${data.test}
 
`;
}

module.exports = generateMarkdown;
