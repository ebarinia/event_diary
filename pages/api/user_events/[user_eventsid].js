import clientPromise from "../../../lib/mongo/mongodb";
import { ObjectId } from 'mongodb';


export default async (req, res) => {
    const client = await clientPromise;
    const db = client.db("eventsdiary");

    if (req.method === 'GET') {
        try {
            const id = req.query.user_eventsid;
            const user_events = db.collection("user_events");
            const event = await user_events.findOne({ id: id });
            
            res.json(event);
        }   catch (e) {
            console.error(e);
            res.status(500).json({ message: "Internal server error" });  
        };
    } else if (req.method === 'DELETE') {
        try {
            const id = req.query.eventsid;
            const events = db.collection("user_events");
            const eventToDelete = await events.deleteOne({ _id: new ObjectId(id) });
            res.json(eventToDelete);
        }   catch (e) {
            console.error(e);
            res.status(500).json({ message: "Internal server error" });  
        };
    };
};