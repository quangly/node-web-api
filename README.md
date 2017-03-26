# Node Web API with Express, MongoDB and Redis


    curl -s -H "Content-Type: application/json" -X POST -d '{"name":"jessy","age":"3","type":"siamese"}' http://localhost:3000/cat | json

    curl -s -H "Content-Type: application/json" -X POST -d '{"name":"sam","age":"5","type":"alley"}' http://localhost:3000/cat | json

    curl -s -X GET http://localhost:3000/cat | json

    curl -s -H "Content-Type: application/json" -X PUT -d '{"name":"sam","age":"8","type":"alley"}' http://localhost:3000/cat/<DOC_ID> | json

    curl -s -X DELETE http://localhost:3000/cat/sam | json


    curl -s -H "Content-Type: application/json" -X POST -d '{"name":"jessy","age":"3","type":"boxer"}' http://localhost:3003/dog | json

    curl -s -H "Content-Type: application/json" -X POST -d '{"name":"sam","age":"5","type":"bulldog"}' http://localhost:3003/dog | json

    curl -s -X GET http://localhost:3003/dog | json

    curl -s -H "Content-Type: application/json" -X PUT -d '{"name":"sam","age":"8","type":"bulldog"}' http://localhost:3003/dog/<DOC_ID> | json

    curl -s -X DELETE http://localhost:3003/dog/ID | json

### 04 MongoDB

    brew up
    brew install mongodb


    # mongo commands
    show dbs
    use cats
    db.cats.find()
    db.cats.remove({})
    use cats
    db.dropDatabase()

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

