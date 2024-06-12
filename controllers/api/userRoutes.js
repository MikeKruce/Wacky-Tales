const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.json({ logged_in: false });
        } else {
            if (user.checkPassword(req.body.password)) {
                req.session.save(() => {
                    req.session.user_id = userData.id;
                    req.session.logged_in = true
                })
                return res.json({ logged_in: true })
            } else {
                return res.json({ logged_in: false })
            }
        }
    } catch (err) {
        console.log(err);
        return res.json({ logged_in: false });
    }
});

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        if (!userData) {
            return res.json({ logged_in: false })
        } else {
            req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.logged_in = true
            })
            return res.json({ logged_in: true })
        }
    } catch (err) {
        console.log(err);
        return res.json({ logged_in: false });
    }
})

module.exports = router;