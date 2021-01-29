const express= require('express')
const fetch = require('node-fetch');
const router = express.Router();


router.get('/:platform/:gamertag', (req,res) =>{
 const {gamertag,platform} = req.params;
    const headers = {
        'TRN-Api-Key': process.env.TRACKER_API_KEY   


    };

fetch(`${process.env.TRACKER_API_URL}/profile/${platform}/${gamertag}`,
{
    headers
})
.then(res => res.json())
.then( data => res.json({success: "success", data}))
.catch(err => console.log(err))

})

module.exports = router;