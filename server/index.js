import "dotenv/config"
import bodyParser from "body-parser"
import express from "express"
import cors from "cors"
import axios from 'axios'
import mongoose from "mongoose"
import projectRouter from "./projects/index.js"
import contactRouter from "./contact/index.js"
import blogRouter from './blog/index.js'

const app = express()
app.use(express.json())
const port = 8888
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3333' }))

const mongoURL = process.env.MONGODB_CONNECTION_STRING || ""
console.log("mongoURL", mongoURL)
const mainDB = async () => {
  await mongoose.connect(mongoURL)
  console.log(`Connected to ${mongoURL}`)
}
mainDB().catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dwalker', (req, res) => {
 
 axios({
    method: 'GET',
    url,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json", Authorization: `Bearer glft-cUb8snBF5EdSyMzX_VGx`
    },
  })
    .then((response) => res.json(response.data))
    .catch((error) => {
      console.error('Error fetching GitLab activities:', error);
      res.status(500).send({ message: 'Failed to fetch data' });
    });
});

app.use("/projects", projectRouter)
app.use("/contact", contactRouter)
app.use("/blogs", blogRouter)




app.listen(port, () => {
  console.log(`Portfolio server listening on port ${port}`)
})