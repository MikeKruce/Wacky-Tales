const sequelize = require('../config/connection');
const { Story } = require('../models');
const bcrypt = require('bcrypt');
const storyData = require('./storyData.json');

const seedDataBase = async () => {
    await sequelize.sync({ force: true });
    for (const story of storyData) {
        await Story.create({
            ...story
        });
    }
    process.exit(0);
}

seedDataBase();