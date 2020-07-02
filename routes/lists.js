const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();
const uri = 'mongodb+srv://Kamel:679344856@cluster0-boqd6.mongodb.net/marketdb?retryWrites=true&w=majority';

//getList
router.get('/', async (req, res) => {
    const lists = await loadLists();
    res.send(await lists.find({}).toArray());
});

//addList
router.post('/', async (req, res) => {
    const lists = await loadLists();
    await lists.insertOne({
        champ: req.body.champ,
        createAt: new Date()
    });
    res.status(201).send();
});

//deleteList

async function loadLists(){
    const client = await mongodb.MongoClient.connect(
        uri,{useNewUrlParser: true});
    return client.db('marketdb').collection('lists');
}

module.exports = router;