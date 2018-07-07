https://travis-ci.org/noahmvf/08-09-http-routing-rest

Add your Travis badge to the top of your README. List all of your registered routes and describe their behavior. Describe what your resouce is. Imagine you are providing this API to other developers who need to research your API in order to use it. Describe how a developer should be able to make requests to your API. Refer to the PokeAPI docs for a good example to follow.

Make virtual birds via this web server!

Setup
Use undeployed version:

git clone https://github.com/karenbtlai/08-09-http-routing-rest.git
npm i
npm install httpie
npm start

Memory or Save to Filesystem
To switch to memory:

Edit variable STORAGE in .env file to anything else
To switch back to FileSystem storage:

Edit variable STORAGE in .env file to STORAGE===filesystem
Features

`Make a bird with POST:`
http POST :3000/api/v1/birds name = [enter bird name] habitat = [enter habitat] region = [enter region]

`Retrieve a bird with GET:`
http GET :3000/api/v1/birds?id=[_id]

`Delete a bird with DELETE:`
http DELETE :3000/api/v1/birds?id=[_id]
