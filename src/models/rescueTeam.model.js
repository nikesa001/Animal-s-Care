import mongoose from "mongoose";

const Schema = mongoose.Schema;

const teamSchema = new Schema({
    teamId: {
        type: Number,
        required: true,
        unique: true
    },
    teamUserName: {
        type: String,
        required: true,
        unique: true
    },
    teamName: {
        type: String,
        required: true
    },
    teamMembers: [{  // Array of references to Employee schema
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    }],
    teamLead: {  // Reference to an Employee schema for the team lead
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    }
});

const RescueTeam = mongoose.model('RescueTeam', teamSchema);
export default RescueTeam
