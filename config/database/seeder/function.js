const mongoose = require('mongoose');
const dotenv = require("dotenv").config();
async function seeder(seedData) {
    mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('Connected to database');
        Promise.all(seedData.map(async (seed) => {
            await seed.model.deleteMany({});
            const created = await seed.model.insertMany(seed.data)
            if(seed?.afterSeed){
                const afterSeeded = await Promise.all( await seed.afterSeed(created));
                await seed.model.deleteMany({_id: {$in: created.map( (c) => c._id)}});
                await seed.model.insertMany(afterSeeded);
            };
            console.log(`${created.length} ${seed.model.collection.collectionName} created`);
        })).finally(() => {
            process.exit();
        });
    })
}

module.exports = seeder;
