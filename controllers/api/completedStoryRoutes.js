const router = require('express').Router();
const { User, Story, CompletedStory } = require('../../models');

router.post('/save-words', async (req, res) => {
    try {
        const newCompletedStory = await CompletedStory.create(req.body);
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