
const {jobPosts,getJobPosts,updateJobPosts,deleteJobPosts,getSingleJobPost}=require('../controllers/jobsController');
const auth=require('../middlewares/auth')
const authRole=require('../middlewares/authRole')

const express=require('express');
const router=express.Router()


router.post('/createJob',auth,authRole('Company'),jobPosts)
router.get('/getJob',auth,getJobPosts)
router.get('/getSingleJob/:id',auth,getSingleJobPost)
router.put('/updateJob/:id',auth,authRole('Company'),updateJobPosts)
router.delete('/deleteJob/:id',auth,authRole('Company'),deleteJobPosts)

module.exports=router;