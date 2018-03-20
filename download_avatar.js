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


  // request(options, function(err, res, body) {
  //   cb(err, body);
  //   body.forEach( function (object) {
  //     console.log(object['avatar_url']);

  //   });
  // });

}



getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Results:", result);
});

var fs = require('fs');
function downloadImageByURL(url, filePath) {
  // filePath = './future.jpg';
  request.get(url)
  .on('error', function (err) {

    throw err;

  })
  .pipe(fs.createWriteStream(filePath));
}

downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", 'avatars/kvirani.jpg');