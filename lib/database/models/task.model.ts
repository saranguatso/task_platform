import { ThermometerSnowflake } from "lucide-react"
import { Document, model, models, Schema } from "mongoose"

export interface ITask extends Document {
    _id: string;
    title: string;
    description: string;
    location: string;
    createdAt: Date;
    imageUrl: string;
    startDateTime: Date;
    endDateTime: Date;
    documentUrl: string;
    taskDeadlineDateTime: Date;
    taskStatus: string;
    price: string;
    isFree: boolean;
    url: string;
    category: { _id: string, name: string };
    organizer: { _id: string, firstName: string, lastName: string };
}

const TaskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    location: { type: String },
    createdAt: { type: Date, default: Date.now },
    imageUrl: { type: String, required: true },
    startDateTime: { type: Date, default: Date.now },
    endDateTime: { type: Date, default: Date.now },

    //For document scanning
    documentUrl: { type: String },
    //Task deadline && status  (not require  at the moment because it's for MVP)
    taskDeadlineDateTime: { type: Date},
    taskStatus: { type: String },

    price:{ type:String },
    isFree: { type: Boolean, default: false },
    url: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    organizer: { type: Schema.Types.ObjectId, ref: 'User' },
})

const  Tasks  =  models.Tasks  ||  model('Tasks', TaskSchema);

export default Tasks;
