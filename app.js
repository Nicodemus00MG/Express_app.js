const express = require("express");

const app = express();

app.get('/me', (request, response) => {
    console.log(request.method)
    response.status(200).json({
        name: 'Angeles Ailen',
        age: '21',
        pais: 'Ecuador',
        verb:request.method
    })
    
})

app.post('/metas',(req,res)=>{
    console.log(res.method)
    res.status(200).json({
        hobbies:
        ['Programar','Jugar futbol','bailar'],
        verb:req.method
    })
})

app.patch('/metas',(req,res)=>{
    console.log(res.method)
    res.status(200).json({
        metas:

        ['Trabajar en desarrollo web','Trabajar en equipos'],
        verb:req.method
    })
})

app.put('/business',(req,res)=>{
    console.log(res.method)
    res.status(200).json({
        business:
        ['Amazon','Meta','Globant'],
        verb:req.method
    })
})



app.listen(8000, () => {
    console.log('Server started at port 8000')
})
