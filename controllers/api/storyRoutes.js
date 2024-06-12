const router = require('express').Router();
const { User, Story } = require('../../models');

router.get('/:id', async (req, res) => {
    try {
        const storyData = await Story.findByPk(req.params.id);
        const story = storyData.get({ plain: true });
        res.json({ story });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;