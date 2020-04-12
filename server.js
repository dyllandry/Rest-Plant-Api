const Express = require('express')
const apicache = require('apicache')
const morgan = require('morgan')

/**
 * REST PRINCIPLE 1/5: layered system
 *
 * The architecture layers are separated by concerns.
 *
 * Example: The database functions are separate from the server routing.
 */
const db = require('./db.js')

/** 
 * REST PRINCIPLE 2/5: client-server
 *
 * Follow the request-response pattern.
 * 
 * Example: curl is our http client, express is our server.
 */
const app = new Express()

/**
 * REST PRINCIPLE 3/5: cacheable
 * 
 * Responses must, either implicitly so or explicitly not, be cacheable.
 * 
 * Example: Repeated GET requests return the same value, so let's cache it.
 */
const cache = apicache.middleware
app.use(cache('5 minutes'))

// Just some debugging options so we can see what's happening.
apicache.options({ debug: true })
app.use(morgan('dev'))

app.get('/cactus', (req, res) => {
    const cactusList = db.getCactusList()
    res.json(cactusList)
})

/**
 * REST PRINCIPLE 4/5: stateless
 *
 * All necessary information to understand the request is contained by the
 * request.
 *
 * Example: The URI, and it's included id, is everything necessary for the
 * server to respond to this request.
 */
app.get('/cactus/:id', (req, res) => {
    const cactusList = db.getCactusById(req.params.id)
    res.json(cactusList)
})

/**
 * REST PRINCIPLE 5/5: uniform interface
 * 
 * The interfaces between client and server must be the same.
 * 
 * Example: Resource uris are predictable and consistent.
 */
app.get('/fern', (req, res) => {
    const fernList = db.getFernList()
    res.json(fernList)
})

app.get('/fern/:id', (req, res) => {
    const fernList = db.getFernById(req.params.id)
    res.json(fernList)
})

app.listen(3000, () => {
    console.log('listening on http://localhost:3000/')
})
