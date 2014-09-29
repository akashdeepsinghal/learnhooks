var githubhook = require('githubhook');
var github = githubhook({/* options */});

github.listen();

github.on('*', function (event, repo, ref, data) {
	console.log(event);
});

github.on('event', function (repo, ref, data) {
});

github.on('event:reponame', function (ref, data) {
});

github.on('event:reponame:ref', function (data) {
});

github.on('reponame', function (event, ref, data) {
});

github.on('reponame:ref', function (event, data) {
});