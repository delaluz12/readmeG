// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    //if no license return empty string cond
    return (license ? `https://img.shields.io/badge/License-${license}-blue?style=flat` : " ");
    // (license === null) ?
    // (let  userLicense = license; //string
    // //generate badge
    // return `https://img.shields.io/badge/License-${userLicense}-blue?style=flat`) : return ' ';

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, username, repoName) {

    return (license ? `https://github.com/${username}/${repoName}/blob/main/LICENSE` : " ")
    //license link
    // https://github.com/${username}/${projectName}/blob/main/LICENSE
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, username, repoName) {

    return (license ? `[![license badge](${renderLicenseBadge(license, username, repoName)})](${renderLicenseLink(license)})` : " ");
}

//function to check and return credits
function renderCredits(hasCredits, creditsArr) {
    return (hasCredits ? `${creditsArr.forEach(credit => {
        return `* ${credit} \n `;
    })}` : `none`);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    // console.log('sup hoes');
    let licenseSection = renderLicenseSection(data.license, data.username, data.projectName);
    let credits = renderCredits(data.has_credits, data.credits);

    return `# ${data.projectName}
  ${licenseSection}
  ## Description
  ${data.description}
  ## Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[Credits](#credits)
  -[License](#license)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${credits}  
  ## License
  This application has a ${data.license} license. Click on the license badge to read license document.`
}

module.exports = generateMarkdown;

    
 