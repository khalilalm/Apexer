  
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/:platform/:gamertag/:segmentType', (req, res) => {
  const { platform,gamertag,segmentType } = req.params;
      const headers = {
      'TRN-Api-Key': process.env.TRACKER_API_KEY
    };

  fetch(
          `${process.env.TRACKER_API_URL}/profile/${platform}/${gamertag}/segments/${segmentType}`,
          {
            headers
          })
          .then(res => res.json())
          .then(data => res.json({success:"success", data }))
          .catch(err => console.log(err))  
})

module.exports = router;