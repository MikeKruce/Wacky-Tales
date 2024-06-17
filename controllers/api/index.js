const router = require('express').Router();
const userRoutes = require('./userRoutes');
const storyRoutes = require('./storyRoutes');
const completedStoryRoutes = require('./completedStoryRoutes');
const randomWordRoute = require('./randomWordRoute');

router.use('/users', userRoutes);
router.use('/story', storyRoutes);
router.use('/completedStory', completedStoryRoutes);
router.use('/randomWord', randomWordRoute);

module.exports = router;