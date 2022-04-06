import express from 'express'
import mongoose from 'mongoose'
import router from './router.js';


//mongo db log des-alt pass *****
const PORT = 8080;
const DB_URL = `mongodb+srv://des-alt:******@backend-course.mqso9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const app = express()

app.use(express.json())
app.use('/api', router)


async function startApp(){
    try{
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('Server is started on port ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()