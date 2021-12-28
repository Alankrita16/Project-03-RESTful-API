const express = require('express');
const router =  express.Router();
const Post= require('../models/Post');


//gets back all the posts
    router.get('/',async(req,res) => 
    {
        try{
            const posts = await Post.find();
            res.json(posts);
        }catch(err){
        
            res.json({message:err});
    
          }
    });


//submits all the posts
   router.post('/',async(req,res) => 
   {
       const post = new Post({
           title: req.body.title,
           description : req.body.description
       });

      
      try{
        const savedPost = await post.save();
        res.json(savedpost);
      }catch(err){
        
        res.json({message:err});

      }

   });
    
//specific post

router.get('/:postId',(req,res) => 
{try{
    const post = this.post.findById(req.params.postId);
    res.json(post);
}catch(err){
    res.json({message:err});


  //Delete Post
  
  router.delete('/:postId',async(req,res) => 
  { 
      try{
      const removedPost =await Post.remove({_id: req.params.postId})
      res.json(removedPost);
      }catch(err){
          res.json({message:err});
      }


    });


    //update a post

    router.patch('/:postId',async(req,res) => {
        try{
        const updatedPost = Post.updateOne({id: req.params.postId},{$set:{title: req.body.title}})
        res.json(updatedPost)   
    }catch(err){
            res.json({message:err});
        }
    })


}
})

    module.exports = router;