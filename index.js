const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

function everyThird(str) {
    let res = ''
    for(let i in str){
      if((i+1)%3===0)res+=str[i]
    }
    return res
}

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello Lyft Recuiter!'))

app.post('/test',  (req, res, next) => {
    try {
        let request = req.body.string_to_cut
        if(typeof(request) === "string"){
             res.json({"return_string":everyThird(request)})
        }
        else{
            res.status(400).send("try sending a string")
        }
    } catch (error) {
        res.status(400).send("Bad Request")
        console.log(error)
    }
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))