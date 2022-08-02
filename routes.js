const {getHouses, deleteHouse, updateHouse, createHouse } = require ('./controller.js')

module.exports = (app) => {
    app.get('api/houses',getHouses)
    app.post('api/houses',createHouse)
    app.put('api/houses/:id',updateHouse)
    app.delete('api/houses/:id',deleteHouse)
}