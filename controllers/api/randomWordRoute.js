const router = require('express').Router();
const { getRandomWord } = require('../../utils/helpers')

router.get('/', async (req, res) => {
    try {
        const randomWord = await getRandomWord();
        console.log(randomWord);
       res.json(randomWord);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Error fetching data');
    }
});

module.exports = router;