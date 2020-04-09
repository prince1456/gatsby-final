const fs = require('fs')
const productJson = require('./product')
const getProductById = async id => {
    
    return productJson.find(product => product._Id === id)
}

const getProducts =  () => {
    return productJson
}


module.exports = {
    getProductById, getProducts
}