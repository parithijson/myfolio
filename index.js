
const express = require('express')
const app = express()

app.use(express.urlencoded([extended=true]));

app.use(express.static('public'));


app.get("/",(req,res)=>{
  res.sendFile(__dirname + '/view/index.html')
})


app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});
