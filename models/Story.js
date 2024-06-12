const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Story extends Model {}

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
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
                unique: false
            }
        },
        noun_count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        verb_count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        adj_count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
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