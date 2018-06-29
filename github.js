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
    repo: "octokitTest",
    title: "test pr",
    head: "test1",
    base: "master",
    body: "test"
  })
  .then(result => {
    console.log(result.data.number);
    octokit.pullRequests.merge({
      owner: "mzbac",
      repo: "octokitTest",
      number: result.data.number
    });
  })
  .catch(e => console.log(e));
