var request = require('request');

function getRepoContributors(RepoOwner, repoName, cb) {

}

console.log('Welcome to the GitHub Avatar Downloader!');

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Results:", result);
});