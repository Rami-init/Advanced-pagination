const Posts = require('../models/posts')

exports.getAllPosts = async(req, res, next)=>{ 
    try {
        let query = Posts.find()
        const page = parseInt(req.query.page) || page
        const pageSize = parseInt(req.query.limit) || 8
        const skip = (page - 1)* pageSize
        const total = await Posts.countDocuments()
        const pages = Math.ceil(total / pageSize) 
        query = query.skip(skip).limit(pageSize)
        if(page > pages) {
            return res.status(404).json({
                success: false,
                messege: 'no page found'
            })
        }
        const result = await query
        res.status(200).json({
            success: true,
            count: result.length,
            page,
            pages,
            posts: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            messege: 'something wrong ??'
        })
    }
} 