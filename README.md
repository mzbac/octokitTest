# octokitTest

### Install dependencies

```bash
npm install @octokit/rest yargs
```

### Run

```js
node github.js --repo=octokitTest --title='test pr' --head=master --base=mzbac-patch-1 --bodyMsg=test
```

### Docker setup

```
docker build -t githubjs .

docker run -it --rm  friendlyhello node github.js --repo=octokitTest --title='test pr' --head=master --base=mzbac-patch-1 --bodyMsg=test
```
