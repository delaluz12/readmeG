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
function renderLicenseSection(license, licenseBageLink, repoLicenseLink) {

    return (license ? `[![license badge](${licenseBageLink})](${repoLicenseLink})` : " ");
}

//function to check and return credits
function renderCredits(hasCredits, creditsArr) {
    return (hasCredits ? `${creditsArr}` : `none`);
    //   const creditsList = (hasCredits) ? `${creditsArr.forEach((credit,i) => {
    //       console.log(credit);
    //       console.log(i);
    //       return credit;
    //   })}` : `none`;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    // console.log('sup hoes');
    // console.log(data);
    // console.log(renderLicenseBadge(data.license));
    // console.log(renderLicenseLink(data.license, data.username, data.projectName));
    let encodedLicenseString = encodeURIComponent(data.license);
    // console.log(encodedLicenseString);
    let licenseBadgeLink = renderLicenseBadge(encodedLicenseString);
    // console.log(licenseBadgeLink);
    let repoLicenseLink = renderLicenseLink(data.license, data.username, data.projectName);
    // console.log(repoLicenseLink)
    let licenseSection = renderLicenseSection(data.license, licenseBadgeLink, repoLicenseLink);
    // console.log(licenseSection);
    let credits = renderCredits(data.has_credits, data.credits);
    // console.log(credits.split(','));
    credits = credits.split(',');
    // console.log(credits);
    creditsString = credits.map(function (credit) {
        return credit + "\n  "
    }).join('');
    // console.log(data.email);
    let emailBadge = `[![alt text](https://img.shields.io/badge/-Email%20Me-grey?logo=minutemailer&label=%20)](mailto:${data.email.trim()})`;
    // console.log(emailBadge);
    // console.log(creditsString)
    // console.log(credits);
    // console.log(data.has_credits);
    // console.log(data.credits);
    let installationCodeBlock = "``` \n  " + data.installation + "\n \n ```";
    // console.log(installationCodeBlock);
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


