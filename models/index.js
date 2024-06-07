const User = require('./User');
const Story = require('./Story');
const CompletedStory = require('./CompletedStory');

CompletedStory.belongsTo(User, {
  foreignKey: 'user_id'
});

CompletedStory.belongsTo(Story, {
    foreignKey: 'story_id'
});

Story.belongsToMany(User, {
    foreignKey: 'user_id'
});

User.hasMany(CompletedStory, {
    foreignKey: 'user_id'
})

module.exports = { User, Story, CompletedStory };