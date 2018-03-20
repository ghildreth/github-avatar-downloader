var request = require('request');
var secrets = require('./secrets.js');
function getRepoContributors(repoOwner, repoName, cb) {
  console.log('Welcome to the GitHub Avatar Downloader!');
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    json: true,
    headers: {
      'User-Agent': 'request',
      'Auth': secrets.GITHUB_TOKEN
    }
  };


  request(options, function(err, res, body) {
    cb(err, body);
    body.forEach( function (object) {
      console.log(object['avatar_url']);

    });
  });

}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Results:", result);
});