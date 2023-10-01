import clientPromise from "../../lib/mongo/mongodb";

export default async (req, res) => {
    const client = await clientPromise;
    const db = client.db("eventsdiary");

    if (req.method === 'GET') {
        try {
            const events = await db
                .collection('events')
                .find()
                .toArray();
            res.json(events);
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: "Internal server error" });
        };
    } else if (req.method === 'POST') {
        try {
            const newData = req.body;
            const newEvent = await db
                .collection('events')
                .insertOne(newData)
            res.json(newEvent);
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: "Internal server error" });
        };
    };
};