const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Story extends Model {
     get wordCount() {
        const inputCounts = {
            adjective: 0,
            season: 0,
            noun: 0,
            verbIng: 0,
            pluralNoun: 0,
            verbEd: 0,
            place: 0,
            animal: 0,
            adverb: 0,
            bodyPart: 0,
            verb: 0,
            color: 0,
            scent: 0,
            emotion: 0,
            name: 0,
            name2: 0,
            food: 0,
            villainName: 0,
            planetName: 0,
            shipName: 0,
            drink: 0,
            samePlace: 0,
            sameName: 0,
            adjectiveLy: 0
        };

 
        // get an array of all the matches
        const parts = this.dataValues.content.match(/\{\{ (?:adjective|season|noun|verbIng|pluralNoun|adjectiveLy|verbEd|place|animal|adverb|bodyPart|verb|color|scent|emotion|name|name2|food|villainName|planetName|shipName|samePlace|sameName|drink) \}\}/g);
        console.log(this.dataValues.content, parts);
        // loop through the matches
        parts.forEach(part => {
            // Remove the outer curly braces and count the word
            const word = part.slice(3, -3);
            inputCounts[word]++;
        });
        return inputCounts;

    }
}
Story.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            isAlphanumeric: true,
            unique: true,
            len: [1, 20]
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
                unique: false
            }
        }

        // noun_count: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        // verb_count: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        // adj_count: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'story',
    }
)

module.exports = Story;