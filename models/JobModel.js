import mongoose from "mongoose";


const JobSchema = new mongoose.Schema({
    company: String,
    postiion: String,
    game:String,
    jobStatus:{
        type:String,
        enum: ['competitive-player', 'streamer'],
        default:'competitive-player'
    },
    jobType:{
        type:String,
        enum:['full-time','tryout'],
        default: 'full-time'
    },
    jobLocation:{
        type: String,
        default: 'Riot Games HQ'
    }
}, {timestamps: true});

export default mongoose.model('Job', JobSchema);