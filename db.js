const data = require('./data.json')

/**
 * REST PRINCIPLE 1/5: layered system
 *
 * The architecture layers are separated by concerns.
 *
 * Example: The database functions are separate from the server routing.
 */
class Db {
    getCactusList () {
        return data.cactus
    }

    getCactusById (id) {
        return data.cactus[id]
    }

    getFernList () {
        return data.fern
    }

    getFernById (id) {
        return data.fern[id]
    }
}

module.exports = new Db() 