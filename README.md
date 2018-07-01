https://travis-ci.org/noahmvf/08-09-http-routing-rest

Add your Travis badge to the top of your README. List all of your registered routes and describe their behavior. Describe what your resouce is. Imagine you are providing this API to other developers who need to research your API in order to use it. Describe how a developer should be able to make requests to your API. Refer to the PokeAPI docs for a good example to follow.

Resource is bird data

With our file-system module, one should be able to POST, GET, and DELETE instances of our Bird data object. 
- For our POST method, our arguments are a schema and an item with a reference to the corresponding schema and item in our data directory. If we have a corresponding schema and item in our directory, then we will create a new Promise that will write our file and post our data
- For our GET method, our arguments are a schema and the corresonding _id of our item. On success, we instantiate a new Promise and read our targeted file based on its schema and id in our data directory
- For our DELETE method, our arguments are a schema and item, if our data directory has the corresponding schema and item, then we will unlink it from the rest of the data in the directory