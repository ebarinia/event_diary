import clientPromise from "../../../lib/mongo/mongodb";
import { ObjectId } from 'mongodb';


export default async (req, res) => {
    const client = await clientPromise;
    const db = client.db("eventsdiary");

    if (req.method === 'GET') {
        try {
            const id = req.query.eventsid;
            const events = db.collection("events");
            const event = await events.findOne({ _id: new ObjectId(id) });
            
            res.json(event);
        }   catch (e) {
            console.error(e);
            res.status(500).json({ message: "Internal server error" });  
        };
    } else if (req.method === 'POST') {
        try {
            const id = req.query.eventsid;
            const events = db.collection("events");
            const eventToDelete = await events.deleteOne({ _id: new ObjectId(id) });
            res.json(eventToDelete);
        }   catch (e) {
            console.error(e);
            res.status(500).json({ message: "Internal server error" });  
        };
    };
};