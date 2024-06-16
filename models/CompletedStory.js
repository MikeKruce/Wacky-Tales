const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class CompletedStory extends Model {} 

CompletedStory.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        words: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        story_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'story',
                key: 'id',
                unique: false
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
                unique: false
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'completed_story',
    }
)

module.exports = CompletedStory;