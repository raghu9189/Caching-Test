const express = require('express');
const nodeCache = require('node-cache');

const myCache = new nodeCache( { stdTTL: 3600});

// Create an Express application
const app = express();
const port = 3000; // Port number you want to listen on

// Define a route handler for the root path
app.get('/:id', (req, res) => {
    const myParams = String(req.params.id)
    
    value = myCache.get( myParams );

    if ( value == undefined ){
       myCache.set(myParams, myParams);
       res.send(`Cache Miss = ${myParams}`);
    }else{
      res.send(`Cache Hit = ${value}`);
    }
 
});


app.get('/cache-purge/:id',(req, res)=>{
  const myParams = String(req.params.id)
  // see if resource exists or not 
  // if exists delete from cache
    exists = myCache.has( myParams );

    if (exists ){
      myCache.del(myParams)
      res.send(`Cache Deleted = ${myParams}`);
  
    }else{
      myCache.set(myParams, myParams);
       res.send(`Cache Set = ${myParams}`);
    }

})

app.get('/cache-update/:id',(req, res)=>{
  const myParams = String(req.params.id)
  
    exists = myCache.has( myParams );

    if (exists ){
      myCache.del(myParams);
      myCache.set(myParams, `New ${myParams}`);
      res.send(`Cache Updated = ${myCache.get(myParams)}`);
  
    }else{
      myCache.set(myParams, `New ${myParams}`);
      res.send(`Cache Set = ${myCache.get(myParams)}`);
    }

})

app.get('/cache-stats',(req, res)=>{
  console.log(myCache.getStats());
  res.json("stats");
})

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
