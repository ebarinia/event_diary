import clientPromise from "../../../lib/mongo/mongodb";
import { ObjectId } from 'mongodb';


export default async function eventById (req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("eventsdiary");
        const id = req.query.eventsid;
        const events = db.collection("events");
        const event = await events.findOne({ _id: new ObjectId(id) })
        
        res.json(event)
    }   catch (e) {
        console.error(e);
        res.status(500).json({ message: "Internal server error" });  
    }
}