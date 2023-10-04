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
    } else if (req.method === 'PUT') {
        try {
            // const eventsid = req.query.user_eventsid;
            const events = db.collection("user_events");
            console.log(req.body)
            const eventToPut = await events.updateOne({ id: req.body.id }, 
                {$set: 
                    {
                        booked: req.body.booked,
                        rated: {
                            overall: req.body.overall,
                            venue: req.body.venue,
                            atmosphere: req.body.atmosphere,
                            prices: req.body.prices,
                            oneliner: req.body.oneliner
                        }
                    }
                }
            );
            res.json(eventToPut);
        }   catch (e) {
            console.error(e);
            res.status(500).json({ message: "Internal server error" });  
        };
    };
};