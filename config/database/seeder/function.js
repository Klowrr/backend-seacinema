const mongoose = require('mongoose');
const dotenv = require("dotenv").config();
async function seeder(seedData) {
    mongoose.connect(process.env.DATABASE_URL)
    .then(async () => {
        console.log('Connected to database');
        Promise.all(seedData.map(async (seed) => {
            await seed.model.deleteMany({});
            const created = await seed.model.insertMany(seed.data)
            console.log(`${created.length} ${seed.model.collection.collectionName} created`);
        })).finally(() => {
            process.exit();
        });
    })
}

module.exports = seeder;
