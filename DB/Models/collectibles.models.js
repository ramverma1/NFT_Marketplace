import mongoose from 'mongoose'
const Schema = mongoose.Schema;

let createCollectibles = new Schema({
    id: {
        type: String,
    },
    address: {
        type: String,
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    img: {
        type: Buffer,
    }
});

module.exports = mongoose.model('NFT', createCollectibles);