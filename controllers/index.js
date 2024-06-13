const router = require('express').Router();

const userRoutes = require('./api/userRoutes');
const homeRoutes = require('./homeRoutes');
const storyRoutes = require('./api/storyRoutes');
const completedStoryRoutes = require('./api/completedStoryRoutes');
router.use('/', homeRoutes);
router.use('/api/user', userRoutes);
router.use('/api/story', storyRoutes);
router.use('/api/completedStory', completedStoryRoutes);

module.exports = router;


