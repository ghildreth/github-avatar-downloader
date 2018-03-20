var request = require('request');
var secrets = require('./secrets.js');
var fs = require('fs');
var owner = process.argv[2]
var repo = process.argv[3];

// this gives us the API array
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

  // this callback handles the body of information from the array
  request(options, function(err, res, body) {
    cb(err, body);
  });

}

// this function downloads the the file and places the file in a predetermined place
function downloadImageByURL(url, filePath) {
  console.log('starting', filePath);
  request.get(url)
  .on('error', function (err) {
    throw err;
  })
  .on('end', function() {
    console.log("           ....     finished", filePath);
  })
  .pipe(fs.createWriteStream(filePath));
}

// this invokes our previous functions in order to run code and loop through the array and also takes arguments from the command line
getRepoContributors("jquery", "jquery", function(err, result) {
  if(!owner || !repo || err){
    console.log("Please enter a valid REPO and valid OWNER.");
  } else {
    console.log(" Got results: ", result.length, "proceeding now!");


  result.forEach(function (object) {

    var login = object.login;
    downloadImageByURL(repo, owner + '.jpg');
  });
 }
});

