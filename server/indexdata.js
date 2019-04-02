const elasticsearch = require('elasticsearch');
const fs = require('fs');

const client = new elasticsearch.Client({
    hosts: [ 'http://localhost:9200']
});

client.indices.create({
    index: 'your_custom_index'
}, function(error, response, status) {
    if (error) {
        console.log(error);
    } else {
        console.log("Successfully!", response);
    }
});
