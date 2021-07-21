const express = require('express')
const redis = require('redis')

const app = express()
const client = redis.createClient()
client.set('visits', 0)
app.get('/', (req, res) => {
  client.get('visits', (error, visits) => {
    res.send(`Visit count ${visits}`)
    client.set('visits', parseInt(visits) + 1)
  })
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server running on ${port}`))
