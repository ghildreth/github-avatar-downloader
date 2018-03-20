var request = require('request');
var secrets = require('./secrets.js');

function getRepoContributors(repoOwner, repoName, cb) {
  // console.log('Welcome to the GitHub Avatar Downloader!');
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Auth': secrets.GITHUB_TOKEN
    }
  };


  request(options, function(err, res, body) {
    cb(err, body);
  });
}


getRepoContributors ("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Results:", result);
});