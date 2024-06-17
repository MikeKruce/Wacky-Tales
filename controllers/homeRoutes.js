const router = require('express').Router();
const { User, Story, CompletedStory } = require('../models');
const handlebars = require('handlebars');
const rpos = require('random-part-of-speech');

router.get('/', async (req, res) => {
    res.render('homepage', {
        start: {
            value: [0]
        }
    });
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

router.get('/story/:id/', async (req, res) => {
    try {
        const storyData = await Story.findByPk(req.params.id);
        const story = storyData.get({ plain: true });
        const randomWord = await getRandomWord();

        res.render('story', {
            story,
            inputCounts: storyData.wordCount,
            randomWord,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/YourWackyTale/:story_id/:id', async (req, res) => {
    try {
        const storyData = await Story.findByPk(req.params.story_id);
        const story = storyData.get({ plain: true });
        const storyTemplate = handlebars.compile(story.content);

        const completedStoryData = await CompletedStory.findByPk(req.params.id);
        const completedStory = completedStoryData.get({ plain: true });
        const storyString = storyTemplate(completedStory.words);

      
        res.render('completedStory', {
            story,
            completedStory,
            storyString,
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



async function getRandomWord() {
    try {
        const response = await rpos.getAny(1);
        return response[0]; // Return the first word from the response
    } catch (err) {
        console.error('Error fetching word:', err);
        throw err;
    }
}

module.exports = router;