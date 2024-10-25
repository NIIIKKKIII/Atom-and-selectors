import express from "express"
import cors from "cors"

const app = express()
app.use(express())
app.use(cors());


app.get("/N", (req, res)=>{
    setTimeout(()=>{
        const data = {
            Home : Math.floor(Math.random()*100),
            Notifications : Math.floor(Math.random()*100),
            Jobs : Math.floor(Math.random()*100),
            MyNetwork : Math.floor(Math.random()*100)
        
        }
        
        res.json(data)
    }, 2000)

})


app.listen(3000);


//Have set timeout 