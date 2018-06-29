const argv = require("yargs").argv;

const octokit = require("@octokit/rest")({
  timeout: 0,
  headers: {
    accept: "application/vnd.github.v3+json",
    "user-agent": "octokit/rest.js v1.2.3"
  },
  baseUrl: "https://api.github.com"
});
octokit.authenticate({
  type: "token",
  token: "your token"
});
octokit.pullRequests
  .create({
    owner: "mzbac",
    repo: argv.repo,
    title: argv.title,
    head: argv.head,
    base: argv.base,
    body: argv.bodyMsg
  })
  .then(result => {
    console.log(result.data.number);
    octokit.pullRequests.merge({
      owner: "mzbac",
      repo: argv.repo,
      number: result.data.number
    });
  })
  .catch(e => console.log(e));
