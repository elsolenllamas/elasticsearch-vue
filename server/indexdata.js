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

const addData = function addData(index, type, data) {
    let dataBody = [];
  
    data.forEach(item => {
      dataBody.push({
        index: {
          _index: index,
          _type: type
        }
      });
      dataBody.push(item);
    });
  
client.bulk({body: dataBody})
    .then(response => {
      let errorCount = 0;
      response.items.forEach(item => {
        if (item.index && item.index.error) {
          console.log(++errorCount, item.index.error);
        }
      });
      console.log(
        `Index OK`
      );
    })
    .catch(console.err);
  };

async function indexDataToES() {
   const dataSource = await fs.readFileSync('./data.json');
   const parsedData = JSON.parse(dataSource);
   addData('your_index', 'your_index_list', parsedData);
}

indexDataToES();
