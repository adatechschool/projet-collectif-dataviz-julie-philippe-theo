// test utilisation API

fetch("https://jsonplaceholder.typicode.com/posts").then(function(response) {
    console.log("success!",response)
})

.catch(function (err) {
    console.log("Something went wrong.", err)
})

/*fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
	// The API call was successful!
	console.log('success!', response);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});*/