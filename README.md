https://travis-ci.org/noahmvf/08-09-http-routing-rest

Routes
router.post
- posts to our api/v1/birds route and saves a new Bird instance on success

router.get
- requests the url.query.id from the url object, on success, it finds the corresponding bird instance and url query id

router.put
- updates a selected instance from our Bird class that matches the requested url.query.id

router.delete
- deletes a selected instance from our Bird class that matches the requested url.query.id

Example get api/v1/{endpoint} returns:

{ 
  name: {bird},
  habitat: {habitat},
  region: {region}
}

Add your Travis badge to the top of your README. List all of your registered routes and describe their behavior. Describe what your resouce is. Imagine you are providing this API to other developers who need to research your API in order to use it. Describe how a developer should be able to make requests to your API. Refer to the PokeAPI docs for a good example to follow.



