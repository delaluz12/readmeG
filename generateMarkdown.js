// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    return (license ? `https://img.shields.io/badge/License-${license}-blue?style=flat` : " ");
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, username, repoName) {
    return (license ? `https://github.com/${username}/${repoName}/blob/main/LICENSE` : " ")
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, licenseBageLink, repoLicenseLink) {
    return (license ? `[![license badge](${licenseBageLink})](${repoLicenseLink})` : " ");
}

//function to check and return credits
function renderCredits(hasCredits, creditsArr) {
    return (hasCredits ? `${creditsArr}` : `none`);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    //encode string if license choosen has spaces
    let encodedLicenseString = encodeURIComponent(data.license);
    // remove spaces from repoName input for license line
    let repoNameStr = data.projectName.replace(/\s/g, '');
    let licenseBadgeLink = renderLicenseBadge(encodedLicenseString);
    let repoLicenseLink = renderLicenseLink(data.license, data.username, repoNameStr);
    let licenseSection = renderLicenseSection(data.license, licenseBadgeLink, repoLicenseLink);
    let credits = renderCredits(data.has_credits, data.credits);
    //turn credits to array and then map through them to build out credit section
    credits = credits.split(',');
    creditsString = credits.map(function (credit) {
        return credit + "\n  "
    }).join('');
    let emailBadge = `[![email badge](https://img.shields.io/badge/-Email%20Me-grey?logo=minutemailer&label=%20)](mailto:${data.email.trim()})`;
    let installationCodeBlock = "``` \n  " + data.installation + "\n \n ```";
    let testingCodeBlock = "``` \n  " + data.testing + "\n \n ```";
    let githubBadge = `[![GitHub followers](https://img.shields.io/github/followers/${data.username}?style=social)](https://github.com/${data.username})`

    return `# ${data.projectName}
  ${licenseSection}
  ## Description
  ${data.description}
  ## Table of Contents
  -[Installation](#installation)\n
  -[Usage](#usage)\n
  -[Testing](#testing)\n
  -[Credits](#credits)\n
  -[License](#license)\n
  ## Installation
  Use the following command to install dependencies
  ${installationCodeBlock}
  ## Testing
  ${testingCodeBlock}
  ## Usage
  ${data.usage}
  ## Credits
  ${creditsString}## License
  This application has a ${data.license} license. Click on the license badge to read license document.
  ## How to Contribute
  ${data.contributing}
  ## Questions? -- Connect with Me 
  Have questions? Feel free to reach out via email\n
  ${emailBadge}\n
  Connect with me on GitHub\n
  ${githubBadge}
  `
}

module.exports = generateMarkdown;


