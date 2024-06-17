const router = require('express').Router();
const { User, Story, CompletedStory } = require('../../models');

router.post('/:id', async (req, res) => {
    try {
        const newStoryData = {
            words: req.body, 
            story_id: req.params.id,
            user_id: req.session.user_id
        }
        
        const newCompletedStory = await CompletedStory.create(newStoryData);
        res.status(200).json(newCompletedStory);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const completedStoryData = await CompletedStory.findByPk(req.params.id);
        const completedStory = completedStoryData.get({ plain: true });
        res.json(completedStory);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;