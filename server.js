const { response } = require('express');
const express= require('express');
const app = express();
app.get('/',(req,res)=>{
    response.send('API running');
})

const PORT = process.env.PORT || 5000 ;
app.listen(PORT,()=>{
    console.log("We are listening to the port " ,PORT);
})