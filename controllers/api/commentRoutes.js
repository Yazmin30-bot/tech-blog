const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
    try {
        const newCom = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
            post_id:req.body.post_id,
        });

        res.status(200).json(newCom);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
      const comData = await Comment.destroy({
        where: {
          id: req.params.id,
          //user_id: req.session.user_id,
        },
      });
  
      if (!comData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(comData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
  router.put('/:id', async (req, res) => {
    try {
      const comData = await Comment.update({
        text: req.body.text,
      }, {
        where: {
          id: req.params.id,
          
          //user_id: req.session.user_id,
        },
      });
  
      if (!comData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(comData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;