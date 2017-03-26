# Node Web API with Express, MongoDB and Redis


    curl -s -H "Content-Type: application/json" -X POST -d '{"name":"jessy","age":"3","type":"siamese"}' http://localhost:3000/cat | jq
    curl -s -H "Content-Type: application/json" -X POST -d '{"name":"sam","age":"5","type":"alley"}' http://localhost:3000/cat | jq
    curl -s -H "Content-Type: application/json" -X POST -d '{"name":"felix","age":"5","type":"longtail"}' http://localhost:3000/cat | jq
    curl -s -X GET http://localhost:3000/cat | jq
    curl -s -H "Content-Type: application/json" -X PUT -d '{"name":"sam","age":"8","type":"alley"}' http://localhost:3000/cat/:ID> | jq
    curl -s -X DELETE http://localhost:3000/cat/<DOC_ID> | jq


    curl -s -H "Content-Type: application/json" -X POST -d '{"name":"jessy","age":"3","type":"boxer"}' http://localhost:3003/dog | jq
    curl -s -H "Content-Type: application/json" -X POST -d '{"name":"junior","age":"5","type":"bulldog"}' http://localhost:3003/dog | jq
    curl -s -X GET http://localhost:3003/dog | jq
    curl -s -H "Content-Type: application/json" -X PUT -d '{"name":"junior","age":"8","type":"bulldog"}' http://localhost:3003/dog/:ID | jq
    curl -s -X DELETE http://localhost:3003/dog/ID | jq




> npm install -g nodemon
> npm install
> brew update 
> brew install mongodb
> brew install redis
> brew install jq
> mongod 
> redis-server

shells

$ redis-cli
$ mongo
show dbs

> show dbs
admin  0.000GB
local  0.000GB
> use cats
switched to db cats
> use dogs
switched to db dogs

URLs
http://127.0.0.1:3000/cat
http://127.0.0.1:3003/dog 

http://localhost:3002/type/cat
http://localhost:3002/type/dog
http://localhost:3002/catname/58d71914361eed1c8c39e407

### Service Commands

# mongo commands
show dbs
use cats
db.cats.find()
db.cats.remove({})
use cats
db.dropDatabase()

# forever 
forever stopall
forever start cat_server.js
forever start dog_server.js
forever list

nodemon pet_server.js


# Useful redis commands
redis-cli
set key value
get key
keys *
flushdb


# if your mongodb doesn't work.
export PATH=/path/to/your/mongo/bin:$PATH
export PATH=$PATH:/usr/local/mongodb/bin
sudo mkdir -p /data/db