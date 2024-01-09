const mediaModel = require('../Models/mediaModel');

exports.getAll = async (req, res) =>{
    try{
        const media = await mediaModel.find();
        res.json(media);
        
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}

exports.create = async (req,res) =>{
    const {name} = req.body;
    let videoPaths = [];

    if(Array.isArray(req.files.videos) && req.files.videos.length > 0){
        for(let video of req.files.videos){
            videoPaths.push('/'+video.path);
        }
    }

    try{
        const createMedia = await mediaModel.create({
            name,
            videos: videoPaths
        })

        res.status(200).json({message: "Media created succesffully ", createMedia});
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
};