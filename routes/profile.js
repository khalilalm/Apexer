  
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// router.get('/:platform/:gamertag/:segmentType', async (req, res) => {
//   try {
//     const headers = {
//       'TRN-Api-Key': process.env.TRACKER_API_KEY
//     };

//     const { platform, gamertag ,segmentType } = req.params;

//     const response = await fetch(
//       `${process.env.TRACKER_API_URL}/profile/${platform}/${gamertag}/segments/${segmentType}`,
//       {
//         headers
//       });

//     const data = await response.json();
//     res.json(data);
//     if (data.errors && data.errors.length > 0) {
//       return res.status(404).json({
//         message: 'Profile Not Found'
//       });
//     }

    
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       message: 'Server Error'
//     });
//   }
// });

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