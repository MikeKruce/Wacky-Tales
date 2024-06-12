const router = require('express').Router();

const userRoutes = require('./api/userRoutes');
const homeRoutes = require('./homeRoutes');
const storyRoutes = require('./api/storyRoutes');

router.use('/', homeRoutes);
router.use('/api/user', userRoutes);
router.use('/api/story', storyRoutes);

module.exports = router;


