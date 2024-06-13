const router = require('express').Router();
const { User, Story } = require('../models');


router.get('/', async (req, res) => {
    res.render('homepage');
});

router.get('/stories', async (req, res) => {
    try {
        const storyData = await Story.findAll();
        const stories = storyData.map((story) => story.get({ plain: true }));
        res.render('stories', {
            stories,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/story/:id', async (req, res) => {
    try {
        const storyData = await Story.findByPk(req.params.id);
        const story = storyData.get({ plain: true });
        const storyPlaceholders = story.content.replace(/\[(.*?)\]/g, '[$1]'); // Preserve the placeholders in the story

        const parts = storyPlaceholders.match(/\[(noun|verb ending in -ed|verb ending in -ing|plural noun|place|adjective|adjective ending in -ly|verb)\]/g);
        const inputCounts = { noun: 0, 'verb ending in -ed': 0, 'verb ending in -ing': 0, 'plural noun': 0, place: 0, adjective: 0, 'adjective ending in -ly': 0, verb: 0 };


        parts.forEach(part => {
            inputCounts[part.slice(1, -1)]++;
        });

        res.render('story', {
            story,
            inputCounts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    res.render('login')
});

router.get('/signup', async (req, res) => {
    res.render('signup')
});

module.exports = router;