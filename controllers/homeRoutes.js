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
        res.render('story', {
            story,
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
