const express = require('express')
const redis = require('redis')
// const process = require('process')

const app = express()
const client = redis.createClient({
  host: 'redis-server',
  port: 6379,
})
client.set('visits', 0)
app.get('/', (req, res) => {
  // process.exit(0)
  client.get('visits', (error, visits) => {
    res.send(`Visit count ${visits}`)
    client.set('visits', parseInt(visits) + 1)
  })
})

const port = process.env.PORT || 3001

app.listen(port, () => console.log(`Server running on ${port}`))
