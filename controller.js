

const HOUSES = require("./db.json")

let baseId = 4

module.exports = {
    getHouses: (req,res) => {
        res.status(200).send(HOUSES)
    },
    deleteHouse: (req,res) => {
        let index = HOUSES.findIndex(house => house.id === req.params.id)
        HOUSES.splice(index, 1)
        res.status(200).send(HOUSES)
    },
    createHouse: (req,res) => {
        let { address, price, imageURL } = req.body

        let newHouse = {
            id: baseId
            address: address,
            price: price,
            imageURL: imageURL,
        }
        HOUSES.push(newHouse)
        baseId++
        res.status(200).send(HOUSES)
    },    
    updateHouse: (req,res) => {
        let { id } = req.params.id
        let { type } = req.body

        let index = HOUSES.findIndex(house => house.id === +id)

        if(HOUSES[index].price <= 10000 && type === 'minus') {
            console.log('House is already at $0!')
            res.status(405).send(HOUSES)
            return
        }

        type === 'plus' ? HOUSES[index].price += 100000 : HOUSES[index].price -= 10000

        res.status(200).send(HOUSES)

    },
}