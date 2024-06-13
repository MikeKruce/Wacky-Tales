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

        const parts = storyPlaceholders.match(/\[(adjective|season|noun|verb ending in -ing|plural noun|adjective ending in -ly|verb ending in -ed|place|animal|adverb|body part|verb|color|scent|emotion|name|name2|food|villain name|planet name|ship name|same place|same name|drink)\]/g);
        const inputCounts = { adjective: 0, season: 0, noun: 0, "verb ending in -ing": 0, "plural noun": 0, "verb ending in -ed": 0, place: 0, animal: 0, adverb: 0, "body part": 0, verb: 0, color: 0, scent: 0, emotion: 0, name: 0, name2: 0, food: 0, "villain name": 0, "planet name": 0, "ship name": 0, drink: 0, "same place": 0, "same name": 0, "adjective adding in -ly": 0 };


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